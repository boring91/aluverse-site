// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";
import { siteUrl } from "./site-config.mjs";

// https://astro.build/config
export default defineConfig({
    site: siteUrl,

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

            RECAPTCHA_SITE_KEY: envField.string({
                context: "server",
                access: "secret",
            }),

            RECAPTCHA_PROJECT_ID: envField.string({
                context: "server",
                access: "secret",
            }),

            RECAPTCHA_API_KEY: envField.string({
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

            GOOGLE_PLACES_API_KEY: envField.string({
                context: "server",
                access: "secret",
                optional: true,
            }),

            GOOGLE_PLACE_ID: envField.string({
                context: "server",
                access: "secret",
                optional: true,
            }),
        },
    },

    integrations: [
        react(),
        sitemap({
            filter: page => !new URL(page).pathname.startsWith("/ads/"),
        }),
    ],
});
