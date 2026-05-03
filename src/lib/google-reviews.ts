import reviewsJson from "../data/google-reviews.json";

export type GoogleReview = {
    author: string;
    authorUrl?: string;
    profilePhoto?: string;
    rating: number;
    text?: string;
    relativeTime: string;
    publishedAt?: string;
    location?: string;
};

export type GoogleReviewsPayload = {
    aggregateRating: number;
    totalReviews: number;
    placeName: string;
    placeUrl?: string;
    reviews: GoogleReview[];
    source: "live" | "manual";
};

type ManualReview = {
    author: string;
    rating: number;
    text?: string;
    publishedAt: string;
    location?: string;
    profilePhoto?: string;
};

type ManualReviewsFile = {
    totalReviews?: number;
    placeUrl?: string;
    reviews: ManualReview[];
};

type PlacesApiReview = {
    rating?: number;
    relativePublishTimeDescription?: string;
    publishTime?: string;
    text?: { text?: string };
    originalText?: { text?: string };
    authorAttribution?: {
        displayName?: string;
        uri?: string;
        photoUri?: string;
    };
};

type PlacesApiResponse = {
    displayName?: { text?: string };
    rating?: number;
    userRatingCount?: number;
    googleMapsUri?: string;
    reviews?: PlacesApiReview[];
};

const PLACES_ENDPOINT = "https://places.googleapis.com/v1/places";
const FIELD_MASK = "displayName,rating,userRatingCount,googleMapsUri,reviews";
const MAX_REVIEWS_DISPLAYED = 10;
const DAY_MS = 1000 * 60 * 60 * 24;

function relativeTimeFrom(publishedAt: string, now = Date.now()) {
    const then = new Date(publishedAt).getTime();
    if (Number.isNaN(then)) return "recently";
    const days = Math.max(0, Math.floor((now - then) / DAY_MS));
    if (days < 1) return "today";
    if (days < 7) return `${days} day${days === 1 ? "" : "s"} ago`;
    if (days < 28) {
        const weeks = Math.floor(days / 7);
        return `${weeks} week${weeks === 1 ? "" : "s"} ago`;
    }
    if (days < 365) {
        const months = Math.max(1, Math.round(days / 30));
        return `${months} month${months === 1 ? "" : "s"} ago`;
    }
    const years = Math.floor(days / 365);
    return `${years} year${years === 1 ? "" : "s"} ago`;
}

function sortByRatingThenDate(reviews: GoogleReview[]) {
    return [...reviews].sort((a, b) => {
        if (b.rating !== a.rating) return b.rating - a.rating;
        const aTime = a.publishedAt ? Date.parse(a.publishedAt) : 0;
        const bTime = b.publishedAt ? Date.parse(b.publishedAt) : 0;
        return bTime - aTime;
    });
}

export function loadManualReviews() {
    const file = reviewsJson as ManualReviewsFile;
    const list = file.reviews ?? [];

    const mapped: GoogleReview[] = list.map(r => ({
        author: r.author,
        rating: r.rating,
        text: r.text?.trim() || undefined,
        relativeTime: relativeTimeFrom(r.publishedAt),
        publishedAt: r.publishedAt,
        location: r.location,
        profilePhoto: r.profilePhoto,
    }));

    const reviews = sortByRatingThenDate(mapped).slice(
        0,
        MAX_REVIEWS_DISPLAYED
    );

    const aggregateRating =
        list.length > 0
            ? Math.round(
                  (list.reduce((sum, r) => sum + r.rating, 0) / list.length) *
                      10
              ) / 10
            : 5;

    return {
        aggregateRating,
        totalReviews: file.totalReviews ?? list.length,
        placeName: "Aluverse",
        placeUrl: file.placeUrl,
        reviews,
        source: "manual",
    };
}

export async function fetchGoogleReviews(
    apiKey: string | undefined,
    placeId: string | undefined
) {
    if (!apiKey || !placeId) return loadManualReviews();

    try {
        const res = await fetch(`${PLACES_ENDPOINT}/${placeId}`, {
            headers: {
                "X-Goog-Api-Key": apiKey,
                "X-Goog-FieldMask": FIELD_MASK,
                "Accept-Language": "en",
            },
        });

        if (!res.ok) return loadManualReviews();

        const data = (await res.json()) as PlacesApiResponse;
        const rawReviews = data.reviews ?? [];

        const parsed: GoogleReview[] = rawReviews.map(r => {
            const rating = Math.round(r.rating ?? 5);
            const rawText = (r.text?.text || r.originalText?.text || "").trim();
            return {
                author: r.authorAttribution?.displayName ?? "Google reviewer",
                authorUrl: r.authorAttribution?.uri,
                profilePhoto: r.authorAttribution?.photoUri,
                rating,
                text: rawText || undefined,
                relativeTime: r.relativePublishTimeDescription ?? "recently",
                publishedAt: r.publishTime,
            };
        });

        if (parsed.length === 0) return loadManualReviews();

        const reviews = sortByRatingThenDate(parsed).slice(
            0,
            MAX_REVIEWS_DISPLAYED
        );

        return {
            aggregateRating: data.rating ?? 5.0,
            totalReviews: data.userRatingCount ?? reviews.length,
            placeName: data.displayName?.text ?? "Aluverse",
            placeUrl: data.googleMapsUri,
            reviews,
            source: "live",
        };
    } catch {
        return loadManualReviews();
    }
}
