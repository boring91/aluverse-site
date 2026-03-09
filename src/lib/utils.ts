import z from "zod";
import {
    contactPreferences,
    propertyTypes,
    services,
    socialMedia,
    timeframes,
} from "../data/site";

export const contactSchema = z.object({
    name: z.string().min(3, { error: "Name is required" }),
    phone: z.string().min(1, { error: "Phone is required" }),
    email: z.email({ error: "Invalid email address" }),
    serviceRequested: z.enum(
        services.map(x => x.id),
        { error: "Requested service is required" }
    ),
    message: z
        .string()
        .min(10, { error: "Message should have at least 10 characters" }),
    recaptcha: z.string().min(1, { error: "Recaptcha field is required" }),
});

export const quoteSchema = z.object({
    name: z.string().min(3),
    phone: z.string().min(1),
    email: z.email(),
    propertyType: z.enum(propertyTypes.map(x => x.id)),
    contactPreference: z.enum(contactPreferences.map(x => x.id)),
    interest: z.enum(services.map(x => x.id)),
    timeframe: z.enum(timeframes.map(x => x.id)),
    socialMedia: z.enum(socialMedia.map(x => x.id)).or(z.literal("")),
    recaptcha: z.string().min(1),
});
