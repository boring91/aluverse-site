import { useForm } from "@tanstack/react-form";
import { contactSchema } from "../lib/utils";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import type z from "zod";
import { services } from "../data/site";
import { ReactProviders } from "./ReactProviders";

type SchemaType = z.infer<typeof contactSchema>;

function Component() {
    const { mutate, isPending, isSuccess, isError, reset } = useMutation({
        mutationFn: async (data: SchemaType) => {
            const res = await fetch("/api/send-contact", {
                method: "POST",
                body: JSON.stringify(data),
            });
            if (!res.ok) {
                throw new Error("Failed to send message");
            }
        },

        onSuccess: () => {
            form.reset();
        },
    });

    useEffect(() => {
        if (!isSuccess) return;
        const timer = setTimeout(() => reset(), 5000);
        return () => clearTimeout(timer);
    }, [isSuccess, reset]);

    const form = useForm({
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            serviceRequested: "" as SchemaType["serviceRequested"],
            message: "",
        },

        validators: {
            onChange: contactSchema,
        },

        onSubmit: async ({ value }) => {
            mutate(value);
        },
    });

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
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

            {/* Service required */}
            <form.Field
                name="serviceRequested"
                children={field => {
                    return (
                        <div className="mt-5">
                            <label
                                htmlFor={field.name}
                                className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-2"
                            >
                                Service Required*
                            </label>
                            <select
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onChange={e =>
                                    field.handleChange(
                                        e.target
                                            .value as SchemaType["serviceRequested"]
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
                                    Select a service
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

            <form.Field
                name="message"
                children={field => {
                    return (
                        <div className="mt-5">
                            <label
                                htmlFor={field.name}
                                className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-2"
                            >
                                Message*
                            </label>
                            <textarea
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onChange={e =>
                                    field.handleChange(e.target.value)
                                }
                                onBlur={field.handleBlur}
                                placeholder="Tell us about your project..."
                                className={`w-full py-3 px-4 border border-divider bg-alt text-sm outline-none focus:border-accent transition-colors h-28 resize-y ${
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
            {(isSuccess || isError) && (
                <div
                    className={`mt-6 px-4 py-3.5 text-sm flex items-start gap-3 ${
                        isSuccess
                            ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
                            : "bg-rose-50 border border-rose-200 text-rose-800"
                    }`}
                    style={{
                        animation: "contactFeedbackIn 0.3s ease-out",
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
                                ? "Message sent successfully"
                                : "Something went wrong"}
                        </p>
                        <p className="mt-0.5 text-xs opacity-80">
                            {isSuccess
                                ? "Thank you for reaching out. We'll get back to you shortly."
                                : "Please try again or contact us directly at 0403 422 401."}
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
                {isPending ? "Sending..." : "Send Message"}
            </button>

            <style>{`
                @keyframes contactFeedbackIn {
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

export function ContactForm() {
    return (
        <ReactProviders>
            <Component />
        </ReactProviders>
    );
}
