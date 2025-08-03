import { z } from "zod";

export const PatentSchema = z.object({
  publisher: z.string().min(1),
  title: z.string().min(1),
  dateOfPublication: z.date(),
  journalLink: z
    .url({ message: "Invalid URL" })
    .startsWith("https://", { message: "Secure URL required." }),
});

export type Patent = z.infer<typeof PatentSchema>;
