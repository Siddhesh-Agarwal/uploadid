import { z } from "zod";

export const ConferenceSchema = z.object({
  eventName: z.string().min(1),
  eventVenue: z.string().min(1),
  dateOfEvent: z.date(),
  link: z
    .url({ message: "Invalid URL" })
    .startsWith("https://", { message: "Secure URL required." }),
});

export type Conference = z.infer<typeof ConferenceSchema>;
