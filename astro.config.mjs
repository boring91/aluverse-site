// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },

    security: {
        checkOrigin: false,
    },

    adapter: vercel(),

    env: {
        schema: {
            PUBLIC_RECAPTCHA_SITE_KEY: envField.string({
                context: "client",
                access: "public",
            }),

            RECAPTCHA_SECRET_KEY: envField.string({
                context: "server",
                access: "secret",
            }),

            RESEND_API_KEY: envField.string({
                context: "server",
                access: "secret",
            }),

            INFO_EMAIL_ADDRESS: envField.string({
                context: "server",
                access: "secret",
            }),
        },
    },

    integrations: [react()],
});
