import z from "zod";
import { contactUsServices } from "../data/site";

const services = contactUsServices.map(x => x.id);

export const contactSchema = z.object({
    name: z.string().min(3),
    phone: z.string().min(1),
    email: z.email(),
    serviceRequested: z.enum(services),
    message: z.string().min(10),
});
