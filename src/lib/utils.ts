import z from "zod";
import {
    contactPreferences,
    propertyTypes,
    services,
    socialMedia,
    timeframes,
} from "../data/site";

export const contactSchema = z.object({
    name: z.string().min(3),
    phone: z.string().min(1),
    email: z.email(),
    serviceRequested: z.enum(services.map(x => x.id)),
    message: z.string().min(10),
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
});
