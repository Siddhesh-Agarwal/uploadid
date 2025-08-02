import { z } from "zod";

export const ConferenceSchema = z.object({
  facultyID: z.string().max(10),
  eventName: z.string().min(1),
  eventVenue: z.string().min(1),
  dateOfEvent: z.coerce.date(),
  link: z
    .url({ message: "Invalid URL" })
    .startsWith("https://", { message: "Secure URL required." }),
});

export type Conference = z.infer<typeof ConferenceSchema>;
