import type { APIRoute } from "astro";
import { Resend } from "resend";
import z from "zod";
import { services } from "../../data/site";
import { INFO_EMAIL_ADDRESS, RESEND_API_KEY } from "astro:env/server";
import { contactSchema } from "../../lib/utils";
import { verifyRecaptcha } from "../../lib/recaptcha";

export const prerender = false;

export const POST = (async ({ request }) => {
    const body = await request.json();
    const hostHeader = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "";
    const userIpAddress =
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
    const userAgent = request.headers.get("user-agent") ?? "";
    const requestSchema = contactSchema.safeExtend({
        recaptcha: z.string().min(1, { error: "Recaptcha field is required" }),
    });

    const { data, error: parseError } = requestSchema.safeParse(body);

    if (parseError) {
        return new Response(JSON.stringify({ error: parseError.issues }), {
            status: 423,
        });
    }

    const recaptchaResult = await verifyRecaptcha({
        expectedAction: "contact_form_submit",
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

    const resend = new Resend(RESEND_API_KEY);
    const { error: sendError } = await resend.emails.send({
        from: `Contact us form <noreply@aluverse.com.au>`,
        to: [INFO_EMAIL_ADDRESS],
        subject: "A new message via site contact us",
        html: `
        <p>Name: ${data.name}</p>
        <p>Phone: ${data.phone}</p>
        <p>Email: ${data.email}</p>
        <p>Service request: ${
            services.find(x => x.id === data.serviceRequested)!.label
        }</p>
        <br>
        <p>${data.message}</p>
        `,
    });

    if (sendError) {
        return new Response(JSON.stringify({ error: sendError.message }), {
            status: sendError.statusCode ?? 423,
        });
    }

    return new Response(null, { status: 200 });
}) satisfies APIRoute;
