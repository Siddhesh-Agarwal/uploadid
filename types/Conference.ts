import { z } from "zod";

export const ConferenceSchema = z.object({
    facultyID: z.coerce.string(),
    eventName: z.coerce.string(),
    eventVenue: z.coerce.string(),
    dateOfEvent: z.coerce.date(),
    link: z.coerce.string().url({ message: "Invalid URL" }).startsWith("https://", { message: "Secure URL required." }),
})

export type Conference = z.infer<typeof ConferenceSchema>