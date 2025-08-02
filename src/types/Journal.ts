import { z } from "zod";
import { journalType } from "@/db/schema";

export const JournalSchema = z.object({
  facultyID: z.string().max(10),
  publisher: z.string().min(1),
  nameOfJournal: z.string().min(1),
  journalType: z.enum(journalType.enumValues),
  dateOfPublication: z.coerce.date(),
  DOI: z.string().min(1),
  issueNumber: z.number(),
  volumeNumber: z.number(),
  paperLink: z
    .url({ message: "Invalid URL" })
    .startsWith("https://", { message: "Secure URL required." }),
  journalLink: z
    .url({ message: "Invalid URL" })
    .startsWith("https://", { message: "Secure URL required." }),
});

export type Journal = z.infer<typeof JournalSchema>;
