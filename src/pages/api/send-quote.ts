import type { APIRoute } from "astro";
import { quoteSchema } from "../../lib/utils";
import { RESEND_API_KEY, INFO_EMAIL_ADDRESS } from "astro:env/server";
import { Resend } from "resend";
import {
    contactPreferences,
    propertyTypes,
    services,
    socialMedia,
    timeframes,
} from "../../data/site";

export const prerender = false;

export const POST = (async ({ request }) => {
    const body = await request.json();

    const { data, error: parseError } = quoteSchema.safeParse(body);

    if (parseError) {
        return new Response(JSON.stringify({ error: parseError.issues }), {
            status: 423,
        });
    }

    const resend = new Resend(RESEND_API_KEY);
    const { error: sendError } = await resend.emails.send({
        from: `Quote form <noreply@aluverse.com.au>`,
        to: [INFO_EMAIL_ADDRESS],
        subject: "A new message via site quote",
        html: `
        <p>Name: ${data.name}</p>
        <p>Phone: ${data.phone}</p>
        <p>Email: ${data.email}</p>
        <p>Property type: ${
            propertyTypes.find(x => x.id === data.propertyType)!.label
        }</p>
        <p>Contact preference: ${
            contactPreferences.find(x => x.id === data.contactPreference)!.label
        }</p>
        <p>Interest: ${services.find(x => x.id === data.interest)!.label}</p>
        <p>Timeframe: ${
            timeframes.find(x => x.id === data.timeframe)!.label
        }</p>
        <p>Social media: ${
            socialMedia.find(x => x.id === data.socialMedia)?.label ?? "N/A"
        }</p>
        `,
    });

    if (sendError) {
        return new Response(JSON.stringify({ error: sendError.message }), {
            status: sendError.statusCode ?? 423,
        });
    }

    return new Response(null, { status: 200 });
}) satisfies APIRoute;
