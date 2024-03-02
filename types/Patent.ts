import { z } from "zod";

export const PatentSchema = z.object({
    publisher: z.coerce.string(),
    title: z.coerce.string(),
    dateOfPublication: z.coerce.date(),
    facultyID: z.coerce.string(),
    journalLink: z.coerce.string().url({ message: "Invalid URL" }).startsWith("https://", { message: "Secure URL required." })
})

export type Patent = z.infer<typeof PatentSchema>