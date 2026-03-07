import type { APIRoute } from "astro";
import { Resend } from "resend";
import { contactUsServices } from "../../data/site";
import { INFO_EMAIL_ADDRESS, RESEND_API_KEY } from "astro:env/server";
import z from "zod";

export const prerender = false;

const services = contactUsServices.map(x => x.id);

const bodySchema = z.object({
    name: z.string().min(3),
    phone: z.string(),
    email: z.email(),
    serviceRequested: z.enum(services),
    message: z.string().min(10),
});

export const POST = (async ({ request }) => {
    const resend = new Resend(RESEND_API_KEY);

    const body = await request.json();

    const { data, error: parseError } = bodySchema.safeParse(body);

    if (parseError) {
        return new Response(
            JSON.stringify({ error: parseError.issues.map(x => x) }),
            {
                status: 423,
            }
        );
    }

    const { error: sendError } = await resend.emails.send({
        from: `Contact us form <noreply@aluverse.com.au>`,
        to: [INFO_EMAIL_ADDRESS],
        subject: "A new message via site contact us",
        html: `
        <p>Name: ${data.name}</p>
        <p>Phone: ${data.phone}</p>
        <p>Email: ${data.email}</p>
        <p>Service request: ${
            contactUsServices.find(x => x.id === data.serviceRequested)!.label
        }</p>
        <br>
        <p>${data.message}</p>
        `,
    });

    if (sendError) {
        return new Response(JSON.stringify({ error: sendError.message }), {
            status: 423,
        });
    }

    return new Response(null, { status: 200 });
}) satisfies APIRoute;
