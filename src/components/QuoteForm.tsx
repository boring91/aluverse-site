import { useForm } from "@tanstack/react-form";
import { quoteSchema } from "../lib/utils";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import type z from "zod";
import {
    company,
    contactPreferences,
    propertyTypes,
    services,
    socialMedia,
    timeframes,
} from "../data/site";
import { ReactProviders } from "./ReactProviders";
import { executeRecaptcha, loadRecaptchaEnterprise } from "../lib/recaptcha-client";

type SchemaType = z.infer<typeof quoteSchema>;
type SubmitPayload = SchemaType & {
    recaptcha: string;
};

const recaptchaAction = "quote_form_submit";
const recaptchaSiteKey = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY;

function Component() {
    const [recaptchaError, setRecaptchaError] = useState(false);
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

        onSuccess: () => {
            form.reset();
            setRecaptchaError(false);

            globalThis.dataLayer?.push({
                event: "form_submission_success",
                form_type: "quote",
            });
        },
    });

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
            propertyType: "" as SchemaType["propertyType"],
            contactPreference: "" as SchemaType["contactPreference"],
            interest: "" as SchemaType["interest"],
            timeframe: "" as SchemaType["timeframe"],
            socialMedia: "" as SchemaType["socialMedia"],
        },

        validators: {
            onChange: quoteSchema,
        },

        onSubmit: async ({ value }) => {
            try {
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
            }
        },
    });

    return (
        <form
            onSubmit={async e => {
                e.preventDefault();
                e.stopPropagation();
                await form.handleSubmit();
            }}
            data-static-form
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <form.Field
                    name="name"
                    children={field => {
                        return (
                            <div>
                                <label
                                    htmlFor={field.name}
                                    className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-2"
                                >
                                    Full Name*
                                </label>
                                <input
                                    type="text"
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onChange={e =>
                                        field.handleChange(e.target.value)
                                    }
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
                                    htmlFor={field.name}
                                    className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-2"
                                >
                                    Phone*
                                </label>
                                <input
                                    type="tel"
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onChange={e =>
                                        field.handleChange(e.target.value)
                                    }
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
            </div>

            {/* Email */}
            <form.Field
                name="email"
                children={field => {
                    return (
                        <div className="mt-5">
                            <label
                                htmlFor={field.name}
                                className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-2"
                            >
                                Email*
                            </label>
                            <input
                                type="email"
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onChange={e =>
                                    field.handleChange(e.target.value)
                                }
                                onBlur={field.handleBlur}
                                placeholder="Your email address"
                                className={`w-full py-3 px-4 border border-divider bg-alt text-sm outline-none focus:border-accent transition-colors ${
                                    !field.state.meta.isValid &&
                                    (field.state.meta.isBlurred ||
                                        field.form.state.submissionAttempts > 0)
                                        ? "border-rose-500"
                                        : ""
                                }`}
                            />
                            {!field.state.meta.isValid &&
                                (field.state.meta.isBlurred ||
                                    field.form.state.submissionAttempts >
                                        0) && (
                                    <p className="mt-1 text-xs text-rose-500">
                                        {field.state.meta.errors[0]?.message}
                                    </p>
                                )}
                        </div>
                    );
                }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                {/* Property Type */}
                <form.Field
                    name="propertyType"
                    children={field => {
                        return (
                            <div>
                                <label
                                    htmlFor={field.name}
                                    className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-2"
                                >
                                    Property Type*
                                </label>
                                <select
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onChange={e =>
                                        field.handleChange(
                                            e.target
                                                .value as SchemaType["propertyType"]
                                        )
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

                {/* Contact Preference */}
                <form.Field
                    name="contactPreference"
                    children={field => {
                        return (
                            <div>
                                <label
                                    htmlFor={field.name}
                                    className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-2"
                                >
                                    Preferred Contact Method*
                                </label>
                                <select
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onChange={e =>
                                        field.handleChange(
                                            e.target
                                                .value as SchemaType["contactPreference"]
                                        )
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
                                        Select preference
                                    </option>
                                    {contactPreferences.map(x => (
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
            </div>

            {/* Product Interest */}
            <form.Field
                name="interest"
                children={field => {
                    return (
                        <div className="mt-5">
                            <label
                                htmlFor={field.name}
                                className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-2"
                            >
                                Product Interest*
                            </label>
                            <select
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onChange={e =>
                                    field.handleChange(
                                        e.target.value as SchemaType["interest"]
                                    )
                                }
                                onBlur={field.handleBlur}
                                className={`w-full py-3 px-4 border border-divider bg-alt text-sm outline-none focus:border-accent transition-colors ${
                                    !field.state.meta.isValid &&
                                    (field.state.meta.isBlurred ||
                                        field.form.state.submissionAttempts > 0)
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
                                    field.form.state.submissionAttempts >
                                        0) && (
                                    <p className="mt-1 text-xs text-rose-500">
                                        {field.state.meta.errors[0]?.message}
                                    </p>
                                )}
                        </div>
                    );
                }}
            />

            {/* Timeframe */}
            <form.Field
                name="timeframe"
                children={field => {
                    return (
                        <div className="mt-5">
                            <label
                                htmlFor={field.name}
                                className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-2"
                            >
                                Preferred Timeframe*
                            </label>
                            <select
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onChange={e =>
                                    field.handleChange(
                                        e.target
                                            .value as SchemaType["timeframe"]
                                    )
                                }
                                onBlur={field.handleBlur}
                                className={`w-full py-3 px-4 border border-divider bg-alt text-sm outline-none focus:border-accent transition-colors ${
                                    !field.state.meta.isValid &&
                                    (field.state.meta.isBlurred ||
                                        field.form.state.submissionAttempts > 0)
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
                                        {field.state.meta.errors[0]?.message}
                                    </p>
                                )}
                        </div>
                    );
                }}
            />

            {/* How Did You Hear About Us */}
            <form.Field
                name="socialMedia"
                children={field => {
                    return (
                        <div className="mt-5">
                            <label
                                htmlFor={field.name}
                                className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-2"
                            >
                                How Did You Hear About Us?
                            </label>
                            <select
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onChange={e =>
                                    field.handleChange(
                                        e.target
                                            .value as SchemaType["socialMedia"]
                                    )
                                }
                                onBlur={field.handleBlur}
                                className="w-full py-3 px-4 border border-divider bg-alt text-sm outline-none focus:border-accent transition-colors"
                            >
                                <option value="">Select an option</option>
                                {socialMedia.map(x => (
                                    <option key={x.id} value={x.id}>
                                        {x.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    );
                }}
            />

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
                className={`w-full py-4 text-xs font-bold tracking-wider uppercase mt-6 transition-all duration-200 flex items-center justify-center gap-2 ${
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

export function QuoteForm() {
    return (
        <ReactProviders>
            <Component />
        </ReactProviders>
    );
}
