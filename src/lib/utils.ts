import z from "zod";
import { propertyTypes, services, timeframes } from "../data/site";

export const quoteSchema = z.object({
    name: z.string().min(3),
    phone: z.string().min(1),
    email: z.email(),
    propertyType: z.enum(propertyTypes.map(x => x.id)),
    interest: z.enum(services.map(x => x.id)),
    timeframe: z.enum(timeframes.map(x => x.id)),
    details: z.string().optional(),
});
