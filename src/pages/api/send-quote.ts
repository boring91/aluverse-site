import type { APIRoute } from "astro";
import z from "zod";
import { quoteSchema } from "../../lib/utils";
import { RESEND_API_KEY, INFO_EMAIL_ADDRESS } from "astro:env/server";
import { Resend } from "resend";
import { propertyTypes, services, timeframes } from "../../data/site";
import { verifyRecaptcha } from "../../lib/recaptcha";
import { QuoteConfirmationEmail } from "../../emails/QuoteConfirmationEmail";

export const prerender = false;

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

export const POST = (async ({ request }) => {
    const body = await request.json();
    const hostHeader = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "";
    const userIpAddress =
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
    const userAgent = request.headers.get("user-agent") ?? "";
    const requestSchema = quoteSchema.safeExtend({
        recaptcha: z.string().min(1, { error: "Recaptcha field is required" }),
    });

    const { data, error: parseError } = requestSchema.safeParse(body);

    if (parseError) {
        return new Response(JSON.stringify({ error: parseError.issues }), {
            status: 423,
        });
    }

    const recaptchaResult = await verifyRecaptcha({
        expectedAction: "quote_form_submit",
        expectedHostname: hostHeader,
        token: data.recaptcha,
        userAgent,
        userIpAddress,
    });
    if (!recaptchaResult) {
        return new Response(JSON.stringify({ error: "Invalid recaptcha" }), {
            status: 423,
        });
    }

    const propertyTypeLabel = propertyTypes.find(
        x => x.id === data.propertyType,
    )!.label;
    const interestLabel = services.find(x => x.id === data.interest)!.label;
    const timeframeLabel = timeframes.find(x => x.id === data.timeframe)!.label;
    const safeName = escapeHtml(data.name);
    const safeDetails = data.details ? escapeHtml(data.details) : "N/A";

    const resend = new Resend(RESEND_API_KEY);

    const [staffResult, confirmationResult] = await Promise.allSettled([
        resend.emails.send({
            from: `Quote form <noreply@aluverse.com.au>`,
            to: [INFO_EMAIL_ADDRESS],
            replyTo: data.email,
            subject: "A new message via site quote",
            html: `
        <p>Name: ${safeName}</p>
        <p>Phone: ${escapeHtml(data.phone)}</p>
        <p>Email: ${escapeHtml(data.email)}</p>
        <p>Property type: ${propertyTypeLabel}</p>
        <p>Interest: ${interestLabel}</p>
        <p>Timeframe: ${timeframeLabel}</p>
        <br>
        <p>Details:</p>
        <p>${safeDetails}</p>
        `,
        }),
        resend.emails.send({
            from: `Aluverse <noreply@aluverse.com.au>`,
            to: [data.email],
            replyTo: INFO_EMAIL_ADDRESS,
            subject: `We've received your quote request — Aluverse`,
            react: QuoteConfirmationEmail({
                name: data.name,
                propertyTypeLabel,
                interestLabel,
                timeframeLabel,
                details: data.details,
            }),
        }),
    ]);

    if (staffResult.status === "rejected" || staffResult.value.error) {
        const sendError =
            staffResult.status === "rejected"
                ? { message: String(staffResult.reason), statusCode: 423 }
                : staffResult.value.error!;
        return new Response(JSON.stringify({ error: sendError.message }), {
            status: sendError.statusCode ?? 423,
        });
    }

    if (
        confirmationResult.status === "rejected" ||
        confirmationResult.value.error
    ) {
        const reason =
            confirmationResult.status === "rejected"
                ? confirmationResult.reason
                : confirmationResult.value.error;
        console.error("Failed to send quote confirmation email", reason);
    }

    return new Response(null, { status: 200 });
}) satisfies APIRoute;
