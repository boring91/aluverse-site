import type { APIRoute } from "astro";
import {
    GOOGLE_PLACES_API_KEY,
    GOOGLE_PLACE_ID,
} from "astro:env/server";
import {
    fetchGoogleReviews,
    loadManualReviews,
} from "../../lib/google-reviews";

export const prerender = false;

export const GET: APIRoute = async () => {
    try {
        const data = await fetchGoogleReviews(
            GOOGLE_PLACES_API_KEY,
            GOOGLE_PLACE_ID,
        );
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control":
                    "public, s-maxage=900, stale-while-revalidate=86400",
                "CDN-Cache-Control":
                    "public, s-maxage=900, stale-while-revalidate=86400",
            },
        });
    } catch {
        return new Response(JSON.stringify(loadManualReviews()), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control":
                    "public, s-maxage=60, stale-while-revalidate=300",
            },
        });
    }
};
