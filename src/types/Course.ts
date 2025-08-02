import { z } from "zod";

export const CourseSchema = z.object({
  facultyID: z.string().max(10),
  courseName: z.string().min(1),
  courseProvider: z.string().min(1),
  dateOfCompletion: z.coerce.date(),
  certificateLink: z
    .url({ message: "Invalid URL" })
    .startsWith("https://", { message: "Secure URL required." }),
});

export type Course = z.infer<typeof CourseSchema>;
