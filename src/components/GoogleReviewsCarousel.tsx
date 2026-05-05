import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useRef, useState } from "react";
import type {
    GoogleReview,
    GoogleReviewsPayload,
} from "../lib/google-reviews";
import { ReactProviders } from "./ReactProviders";

const AUTOPLAY_MS = 7000;
const GOOGLE_GOLD = "#FBBC05";
const SWIPE_THRESHOLD_PX = 40;

type Props = {
    data: GoogleReviewsPayload;
};

function Stars({
    rating,
    size = "size-4",
}: {
    rating: number;
    size?: string;
}) {
    return (
        <div
            className="flex items-center gap-1"
            aria-label={`${rating} out of 5 stars`}
        >
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    viewBox="0 0 24 24"
                    className={size}
                    style={{
                        fill: i < rating ? GOOGLE_GOLD : "#e0e2e4",
                    }}
                    aria-hidden="true"
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            ))}
        </div>
    );
}

function GoogleWordmark({ className = "" }: { className?: string }) {
    return (
        <span
            className={`font-bold tracking-tight ${className}`}
            aria-label="Google"
        >
            <span style={{ color: "#4285F4" }}>G</span>
            <span style={{ color: "#EA4335" }}>o</span>
            <span style={{ color: "#FBBC05" }}>o</span>
            <span style={{ color: "#4285F4" }}>g</span>
            <span style={{ color: "#34A853" }}>l</span>
            <span style={{ color: "#EA4335" }}>e</span>
        </span>
    );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            aria-hidden="true"
        >
            {direction === "left" ? (
                <>
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                </>
            ) : (
                <>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                </>
            )}
        </svg>
    );
}

function ReviewCard({ review }: { review: GoogleReview }) {
    const initials = review.author
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map(s => s.charAt(0).toUpperCase())
        .join("");

    return (
        <article className="bg-white border border-divider p-8 md:p-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
                <Stars rating={review.rating} />
                <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-text-muted">
                    Google
                </span>
            </div>

            {review.text ? (
                <p className="font-display italic text-lg leading-[1.55] text-text-primary mb-8 flex-1">
                    &ldquo;{review.text}&rdquo;
                </p>
            ) : (
                <div className="flex-1 min-h-[40px]" />
            )}

            <div className="flex items-center gap-3 pt-6 border-t border-divider mt-auto">
                {review.profilePhoto ? (
                    <img
                        src={review.profilePhoto}
                        alt=""
                        className="size-11 rounded-full object-cover border border-divider"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                    />
                ) : (
                    <span
                        className="size-11 rounded-full bg-alt border border-divider flex items-center justify-center text-xs font-semibold tracking-widest uppercase text-text-muted"
                        aria-hidden="true"
                    >
                        {initials || review.author.charAt(0)}
                    </span>
                )}
                <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-text-primary">
                        {review.author}
                    </p>
                    <p className="text-xs text-text-muted mt-1">
                        {review.location ? `${review.location} · ` : ""}
                        {review.relativeTime}
                    </p>
                </div>
            </div>
        </article>
    );
}

function Carousel({ data: initialData }: Props) {
    const { data } = useQuery({
        queryKey: ["google-reviews"],
        queryFn: async () => {
            const res = await fetch("/api/google-reviews");
            if (!res.ok) throw new Error("Failed to load reviews");
            return (await res.json()) as GoogleReviewsPayload;
        },
        initialData,
        staleTime: 5 * 60 * 1000,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
    });

    const reviews: GoogleReview[] = data.reviews;
    const count = reviews.length;

    const [visible, setVisible] = useState(1);
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const reducedMotion = useRef(false);
    const touchStartX = useRef(0);

    useEffect(() => {
        const lg = window.matchMedia("(min-width: 1024px)");
        const md = window.matchMedia("(min-width: 768px)");
        const update = () =>
            setVisible(lg.matches ? 3 : md.matches ? 2 : 1);
        update();
        lg.addEventListener("change", update);
        md.addEventListener("change", update);
        reducedMotion.current = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        return () => {
            lg.removeEventListener("change", update);
            md.removeEventListener("change", update);
        };
    }, []);

    const effectiveVisible = Math.min(visible, Math.max(1, count));
    const maxIndex = Math.max(0, count - effectiveVisible);

    useEffect(() => {
        setIndex(i => Math.min(i, maxIndex));
    }, [maxIndex]);

    const advance = useCallback(() => {
        setIndex(i => (i >= maxIndex ? 0 : i + 1));
    }, [maxIndex]);

    const back = useCallback(() => {
        setIndex(i => (i <= 0 ? maxIndex : i - 1));
    }, [maxIndex]);

    useEffect(() => {
        if (paused || reducedMotion.current || count <= effectiveVisible)
            return;
        const id = window.setTimeout(advance, AUTOPLAY_MS);
        return () => window.clearTimeout(id);
    }, [paused, advance, count, effectiveVisible, index]);

    if (count === 0) return null;

    const slidePct = 100 / effectiveVisible;
    const translateX = -(index * slidePct);
    const pages = maxIndex + 1;
    const showControls = count > effectiveVisible;

    return (
        <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
        >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
                <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                        Client Feedback
                    </p>
                    <h2 className="text-3xl md:text-4xl flex items-baseline gap-2.5">
                        <GoogleWordmark className="text-3xl md:text-4xl" />
                        <span className="font-bold tracking-tight text-text-primary">
                            Reviews
                        </span>
                    </h2>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                    <div className="flex items-center gap-3">
                        <span className="font-bold text-2xl md:text-3xl text-text-primary leading-none">
                            {data.aggregateRating.toFixed(1)}
                        </span>
                        <Stars rating={5} size="size-5 md:size-6" />
                        <span className="text-sm text-text-muted">
                            ({data.totalReviews})
                        </span>
                    </div>
                    {data.placeUrl ? (
                        <a
                            href={data.placeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-text-muted hover:text-text-primary transition-colors group"
                        >
                            Read all on Google
                            <span className="inline-block transition-transform group-hover:translate-x-1">
                                <ArrowIcon direction="right" />
                            </span>
                        </a>
                    ) : null}
                </div>
            </div>

            {/* Viewport */}
            <div
                className="overflow-hidden -mx-3"
                onTouchStart={e => {
                    touchStartX.current = e.touches[0]?.clientX ?? 0;
                }}
                onTouchEnd={e => {
                    const endX = e.changedTouches[0]?.clientX ?? 0;
                    const delta = endX - touchStartX.current;
                    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
                    if (delta < 0) advance();
                    else back();
                }}
            >
                <div
                    className="flex"
                    style={{
                        transform: `translateX(${translateX}%)`,
                        transition: reducedMotion.current
                            ? "none"
                            : "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                >
                    {reviews.map((r, i) => (
                        <div
                            key={i}
                            className="shrink-0 px-3"
                            style={{ width: `${slidePct}%` }}
                        >
                            <ReviewCard review={r} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls */}
            {showControls ? (
                <div className="flex items-center gap-5 md:gap-6 mt-8">
                    <span
                        className="text-[11px] tracking-[0.25em] text-text-muted font-mono shrink-0"
                        aria-live="polite"
                    >
                        {String(index + 1).padStart(2, "0")}
                        <span className="mx-2">—</span>
                        {String(pages).padStart(2, "0")}
                    </span>
                    <div className="flex-1 h-px bg-divider relative overflow-hidden">
                        <div
                            className="absolute inset-y-[-1px] left-0 bg-anodise transition-[width] duration-300 ease-out"
                            style={{
                                width: `${((index + 1) / pages) * 100}%`,
                            }}
                        />
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            type="button"
                            onClick={back}
                            className="size-10 border border-divider flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-text-primary transition-colors"
                            aria-label="Previous review"
                        >
                            <ArrowIcon direction="left" />
                        </button>
                        <button
                            type="button"
                            onClick={advance}
                            className="size-10 border border-divider flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-text-primary transition-colors"
                            aria-label="Next review"
                        >
                            <ArrowIcon direction="right" />
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export function GoogleReviewsCarousel({ data }: Props) {
    return (
        <ReactProviders>
            <Carousel data={data} />
        </ReactProviders>
    );
}
