import { useForm } from "@tanstack/react-form";
import { quoteSchema } from "../lib/utils";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import type z from "zod";
import { company, propertyTypes, services, timeframes } from "../data/site";
import { ReactProviders } from "./ReactProviders";
import {
    executeRecaptcha,
    loadRecaptchaEnterprise,
} from "../lib/recaptcha-client";

type SchemaType = z.infer<typeof quoteSchema>;
type SubmitPayload = SchemaType & {
    recaptcha: string;
};

type ComponentProps = {
    wide?: boolean;
    compact?: boolean;
    formIdPrefix?: string;
    defaultInterest?: SchemaType["interest"];
    defaultPropertyType?: SchemaType["propertyType"];
};

const recaptchaAction = "quote_form_submit";
const recaptchaSiteKey = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY;

function Component({
    wide = false,
    compact = false,
    formIdPrefix = "quote",
    defaultInterest,
    defaultPropertyType,
}: ComponentProps) {
    const halfSpan = wide || compact ? "" : "md:col-span-2";
    const fullSpan = compact ? "sm:col-span-2" : "md:col-span-2";
    const emailSpan = compact ? "sm:col-span-2" : halfSpan;
    const gridClass = compact
        ? "grid grid-cols-1 sm:grid-cols-2 gap-3"
        : "grid grid-cols-1 md:grid-cols-2 gap-5";
    const submitClass = compact ? "mt-4" : "mt-6";
    const detailsClass = compact
        ? "w-full py-3 px-4 border border-divider bg-alt text-sm outline-none focus:border-accent transition-colors h-24 resize-y"
        : "w-full py-3 px-4 border border-divider bg-alt text-sm outline-none focus:border-accent transition-colors h-32 resize-y";
    const detailsPlaceholder = compact
        ? "Brief project details: sizes, quantities, finishes, timing..."
        : "Tell us about your project: sizes, quantities, finishes, timing, or anything else that helps us prepare your quote...";
    const fieldId = (name: string) => `${formIdPrefix}-${name}`;
    const formVariant = compact ? "compact" : wide ? "wide" : "standard";
    const hasTrackedStart = useRef(false);
    const [recaptchaError, setRecaptchaError] = useState(false);

    const pushQuoteEvent = (
        event: string,
        data: Record<string, string> = {}
    ) => {
        globalThis.dataLayer?.push({
            event,
            form_type: "quote",
            form_id: formIdPrefix,
            form_variant: formVariant,
            page_path:
                typeof window === "undefined" ? "" : window.location.pathname,
            ...data,
        });
    };

    const trackFormStart = (fieldName: string) => {
        if (hasTrackedStart.current) return;
        hasTrackedStart.current = true;
        pushQuoteEvent("quote_form_start", {
            first_field: fieldName,
        });
    };

    const { mutate, isPending, isSuccess, isError, reset } = useMutation({
        mutationFn: async (data: SubmitPayload) => {
            const res = await fetch("/api/send-quote", {
                method: "POST",
                body: JSON.stringify(data),
            });
            if (!res.ok) {
                throw new Error("Failed to send quote request");
            }
        },

        onSuccess: (_data, variables) => {
            form.reset();
            setRecaptchaError(false);

            pushQuoteEvent("generate_lead", {
                property_type: variables.propertyType,
                interest: variables.interest,
                timeframe: variables.timeframe,
            });
            pushQuoteEvent("quote_form_submission_success", {
                property_type: variables.propertyType,
                interest: variables.interest,
                timeframe: variables.timeframe,
            });
            pushQuoteEvent("form_submission_success", {
                legacy_event: "true",
            });
        },

        onError: () => {
            pushQuoteEvent("quote_form_submission_error");
        },
    });

    useEffect(() => {
        pushQuoteEvent("quote_form_view");
    }, []);

    useEffect(() => {
        if (!isSuccess) return;
        const timer = setTimeout(() => reset(), 5000);
        return () => clearTimeout(timer);
    }, [isSuccess, reset]);

    useEffect(() => {
        void loadRecaptchaEnterprise(recaptchaSiteKey);
    }, []);

    const form = useForm({
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            propertyType:
                defaultPropertyType ?? ("" as SchemaType["propertyType"]),
            interest: defaultInterest ?? ("" as SchemaType["interest"]),
            timeframe: "" as SchemaType["timeframe"],
            details: "",
        },

        validators: {
            onChange: quoteSchema,
        },

        onSubmit: async ({ value }) => {
            try {
                pushQuoteEvent("quote_form_validated", {
                    property_type: value.propertyType,
                    interest: value.interest,
                    timeframe: value.timeframe,
                });

                const token = await executeRecaptcha(
                    recaptchaSiteKey,
                    recaptchaAction
                );
                setRecaptchaError(false);
                mutate({
                    ...value,
                    recaptcha: token,
                });
            } catch {
                setRecaptchaError(true);
                pushQuoteEvent("quote_form_recaptcha_error");
            }
        },
    });

    useEffect(() => {
        if (!form.state.submissionAttempts || form.state.isValid) return;
        pushQuoteEvent("quote_form_validation_error", {
            submission_attempts: String(form.state.submissionAttempts),
        });
    }, [form.state.submissionAttempts, form.state.isValid]);

    return (
        <form
            onSubmit={async e => {
                e.preventDefault();
                e.stopPropagation();
                pushQuoteEvent("quote_form_submit_attempt");
                await form.handleSubmit();
            }}
            data-static-form
            data-analytics-form="quote"
            data-analytics-form-id={formIdPrefix}
        >
            <div className={gridClass}>
                {/* Name */}
                <form.Field
                    name="name"
                    children={field => {
                        return (
                            <div>
                                <label
                                    htmlFor={fieldId(field.name)}
                                    className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-2"
                                >
                                    Full Name*
                                </label>
                                <input
                                    type="text"
                                    id={fieldId(field.name)}
                                    name={field.name}
                                    value={field.state.value}
                                    onChange={e =>
                                        field.handleChange(e.target.value)
                                    }
                                    onFocus={() => trackFormStart(field.name)}
                                    onBlur={field.handleBlur}
                                    placeholder="Your full name"
                                    className={`w-full py-3 px-4 border border-divider bg-alt text-sm outline-none focus:border-accent transition-colors ${
                                        !field.state.meta.isValid &&
                                        (field.state.meta.isBlurred ||
                                            field.form.state
                                                .submissionAttempts > 0)
                                            ? "border-rose-500"
                                            : ""
                                    }`}
                                />
                                {!field.state.meta.isValid &&
                                    (field.state.meta.isBlurred ||
                                        field.form.state.submissionAttempts >
                                            0) && (
                                        <p className="mt-1 text-xs text-rose-500">
                                            {
                                                field.state.meta.errors[0]
                                                    ?.message
                                            }
                                        </p>
                                    )}
                            </div>
                        );
                    }}
                />

                {/* Phone */}
                <form.Field
                    name="phone"
                    children={field => {
                        return (
                            <div>
                                <label
                                    htmlFor={fieldId(field.name)}
                                    className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-2"
                                >
                                    Phone*
                                </label>
                                <input
                                    type="tel"
                                    id={fieldId(field.name)}
                                    name={field.name}
                                    value={field.state.value}
                                    onChange={e =>
                                        field.handleChange(e.target.value)
                                    }
                                    onFocus={() => trackFormStart(field.name)}
                                    onBlur={field.handleBlur}
                                    placeholder="Your phone number"
                                    className={`w-full py-3 px-4 border border-divider bg-alt text-sm outline-none focus:border-accent transition-colors ${
                                        !field.state.meta.isValid &&
                                        (field.state.meta.isBlurred ||
                                            field.form.state
                                                .submissionAttempts > 0)
                                            ? "border-rose-500"
                                            : ""
                                    }`}
                                />
                                {!field.state.meta.isValid &&
                                    (field.state.meta.isBlurred ||
                                        field.form.state.submissionAttempts >
                                            0) && (
                                        <p className="mt-1 text-xs text-rose-500">
                                            {
                                                field.state.meta.errors[0]
                                                    ?.message
                                            }
                                        </p>
                                    )}
                            </div>
                        );
                    }}
                />

                {/* Email */}
                <form.Field
                    name="email"
                    children={field => {
                        return (
                            <div className={emailSpan}>
                                <label
                                    htmlFor={fieldId(field.name)}
                                    className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-2"
                                >
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    id={fieldId(field.name)}
                                    name={field.name}
                                    value={field.state.value}
                                    onChange={e =>
                                        field.handleChange(e.target.value)
                                    }
                                    onFocus={() => trackFormStart(field.name)}
                                    onBlur={field.handleBlur}
                                    placeholder="Your email address"
                                    className={`w-full py-3 px-4 border border-divider bg-alt text-sm outline-none focus:border-accent transition-colors ${
                                        !field.state.meta.isValid &&
                                        (field.state.meta.isBlurred ||
                                            field.form.state
                                                .submissionAttempts > 0)
                                            ? "border-rose-500"
                                            : ""
                                    }`}
                                />
                                {!field.state.meta.isValid &&
                                    (field.state.meta.isBlurred ||
                                        field.form.state.submissionAttempts >
                                            0) && (
                                        <p className="mt-1 text-xs text-rose-500">
                                            {
                                                field.state.meta.errors[0]
                                                    ?.message
                                            }
                                        </p>
                                    )}
                            </div>
                        );
                    }}
                />

                {/* Property Type */}
                <form.Field
                    name="propertyType"
                    children={field => {
                        return (
                            <div className={halfSpan}>
                                <label
                                    htmlFor={fieldId(field.name)}
                                    className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-2"
                                >
                                    Property Type*
                                </label>
                                <select
                                    id={fieldId(field.name)}
                                    name={field.name}
                                    value={field.state.value}
                                    onChange={e =>
                                        field.handleChange(
                                            e.target
                                                .value as SchemaType["propertyType"]
                                        )
                                    }
                                    onFocus={() => trackFormStart(field.name)}
                                    onBlur={field.handleBlur}
                                    className={`w-full py-3 px-4 border border-divider bg-alt text-sm outline-none focus:border-accent transition-colors ${
                                        !field.state.meta.isValid &&
                                        (field.state.meta.isBlurred ||
                                            field.form.state
                                                .submissionAttempts > 0)
                                            ? "border-rose-500"
                                            : ""
                                    }`}
                                >
                                    <option value="" disabled>
                                        Select property type
                                    </option>
                                    {propertyTypes.map(x => (
                                        <option key={x.id} value={x.id}>
                                            {x.label}
                                        </option>
                                    ))}
                                </select>
                                {!field.state.meta.isValid &&
                                    (field.state.meta.isBlurred ||
                                        field.form.state.submissionAttempts >
                                            0) && (
                                        <p className="mt-1 text-xs text-rose-500">
                                            {
                                                field.state.meta.errors[0]
                                                    ?.message
                                            }
                                        </p>
                                    )}
                            </div>
                        );
                    }}
                />

                {!compact && (
                    <form.Field
                        name="interest"
                        children={field => {
                            return (
                                <div className={halfSpan}>
                                    <label
                                        htmlFor={fieldId(field.name)}
                                        className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-2"
                                    >
                                        Product Interest*
                                    </label>
                                    <select
                                        id={fieldId(field.name)}
                                        name={field.name}
                                        value={field.state.value}
                                        onChange={e =>
                                            field.handleChange(
                                                e.target
                                                    .value as SchemaType["interest"]
                                            )
                                        }
                                        onFocus={() =>
                                            trackFormStart(field.name)
                                        }
                                        onBlur={field.handleBlur}
                                        className={`w-full py-3 px-4 border border-divider bg-alt text-sm outline-none focus:border-accent transition-colors ${
                                            !field.state.meta.isValid &&
                                            (field.state.meta.isBlurred ||
                                                field.form.state
                                                    .submissionAttempts > 0)
                                                ? "border-rose-500"
                                                : ""
                                        }`}
                                    >
                                        <option value="" disabled>
                                            What are you interested in?
                                        </option>
                                        {services.map(x => (
                                            <option key={x.id} value={x.id}>
                                                {x.label}
                                            </option>
                                        ))}
                                    </select>
                                    {!field.state.meta.isValid &&
                                        (field.state.meta.isBlurred ||
                                            field.form.state
                                                .submissionAttempts > 0) && (
                                            <p className="mt-1 text-xs text-rose-500">
                                                {
                                                    field.state.meta.errors[0]
                                                        ?.message
                                                }
                                            </p>
                                        )}
                                </div>
                            );
                        }}
                    />
                )}

                {/* Timeframe */}
                <form.Field
                    name="timeframe"
                    children={field => {
                        return (
                            <div className={halfSpan}>
                                <label
                                    htmlFor={fieldId(field.name)}
                                    className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-2"
                                >
                                    Preferred Timeframe*
                                </label>
                                <select
                                    id={fieldId(field.name)}
                                    name={field.name}
                                    value={field.state.value}
                                    onChange={e =>
                                        field.handleChange(
                                            e.target
                                                .value as SchemaType["timeframe"]
                                        )
                                    }
                                    onFocus={() => trackFormStart(field.name)}
                                    onBlur={field.handleBlur}
                                    className={`w-full py-3 px-4 border border-divider bg-alt text-sm outline-none focus:border-accent transition-colors ${
                                        !field.state.meta.isValid &&
                                        (field.state.meta.isBlurred ||
                                            field.form.state
                                                .submissionAttempts > 0)
                                            ? "border-rose-500"
                                            : ""
                                    }`}
                                >
                                    <option value="" disabled>
                                        Select timeframe
                                    </option>
                                    {timeframes.map(x => (
                                        <option key={x.id} value={x.id}>
                                            {x.label}
                                        </option>
                                    ))}
                                </select>
                                {!field.state.meta.isValid &&
                                    (field.state.meta.isBlurred ||
                                        field.form.state.submissionAttempts >
                                            0) && (
                                        <p className="mt-1 text-xs text-rose-500">
                                            {
                                                field.state.meta.errors[0]
                                                    ?.message
                                            }
                                        </p>
                                    )}
                            </div>
                        );
                    }}
                />

                <form.Field
                    name="details"
                    children={field => {
                        return (
                            <div className={fullSpan}>
                                <label
                                    htmlFor={fieldId(field.name)}
                                    className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-2"
                                >
                                    Project Details
                                </label>
                                <textarea
                                    id={fieldId(field.name)}
                                    name={field.name}
                                    value={field.state.value}
                                    onChange={e =>
                                        field.handleChange(e.target.value)
                                    }
                                    onFocus={() => trackFormStart(field.name)}
                                    onBlur={field.handleBlur}
                                    placeholder={detailsPlaceholder}
                                    className={detailsClass}
                                />
                            </div>
                        );
                    }}
                />
            </div>

            {/* Recaptcha */}
            <div className="mt-5 min-h-5 empty:hidden">
                {recaptchaError && (
                    <p className="mt-1 text-xs text-rose-500 text-center">
                        Security verification failed. Please try again.
                    </p>
                )}
            </div>

            {(isSuccess || isError) && (
                <div
                    className={`mt-6 px-4 py-3.5 text-sm flex items-start gap-3 ${
                        isSuccess
                            ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
                            : "bg-rose-50 border border-rose-200 text-rose-800"
                    }`}
                    style={{
                        animation: "quoteFeedbackIn 0.3s ease-out",
                    }}
                >
                    {isSuccess ? (
                        <svg
                            className="w-5 h-5 shrink-0 text-emerald-600 mt-px"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-5 h-5 shrink-0 text-rose-600 mt-px"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                    <div>
                        <p className="font-semibold leading-snug">
                            {isSuccess
                                ? "Quote request submitted"
                                : "Something went wrong"}
                        </p>
                        <p className="mt-0.5 text-xs opacity-80">
                            {isSuccess
                                ? "Thank you for your request. We'll get back to you with a quote shortly."
                                : `Please try again or contact us directly at ${company.phoneDisplay}.`}
                        </p>
                    </div>
                    {isError && (
                        <button
                            type="button"
                            onClick={() => reset()}
                            className="ml-auto shrink-0 p-1 opacity-60 hover:opacity-100 transition-opacity"
                            aria-label="Dismiss"
                        >
                            <svg
                                className="w-4 h-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                        </button>
                    )}
                </div>
            )}

            <button
                type="submit"
                className={`w-full py-4 text-xs font-bold tracking-wider uppercase ${submitClass} transition-all duration-200 flex items-center justify-center gap-2 ${
                    isPending
                        ? "bg-accent-dim text-white/70 cursor-not-allowed"
                        : "bg-accent text-white hover:bg-accent-hover"
                }`}
                disabled={isPending}
            >
                {isPending && (
                    <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                    </svg>
                )}
                {isPending ? "Submitting..." : "Submit Quote Request"}
            </button>

            <p className="mt-4 text-[11px] leading-relaxed text-center text-text-muted">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2 hover:text-text-primary transition-colors"
                >
                    Privacy Policy
                </a>{" "}
                and{" "}
                <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2 hover:text-text-primary transition-colors"
                >
                    Terms of Service
                </a>{" "}
                apply.
            </p>

            <style>{`
                @keyframes quoteFeedbackIn {
                    from {
                        opacity: 0;
                        transform: translateY(-6px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </form>
    );
}

export function QuoteForm({
    wide = false,
    compact = false,
    formIdPrefix,
    defaultInterest,
    defaultPropertyType,
}: ComponentProps) {
    return (
        <ReactProviders>
            <Component
                wide={wide}
                compact={compact}
                formIdPrefix={formIdPrefix}
                defaultInterest={defaultInterest}
                defaultPropertyType={defaultPropertyType}
            />
        </ReactProviders>
    );
}
