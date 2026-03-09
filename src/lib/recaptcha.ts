import { RECAPTCHA_SECRET_KEY } from "astro:env/server";

export async function verifyRecaptcha(token: string) {
    const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `response=${token}&secret=${RECAPTCHA_SECRET_KEY}`,
        }
    );

    const data = (await response.json()) as { success: boolean };

    return data.success ?? false;
}
