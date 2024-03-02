import { z } from "zod";

export const CourseSchema = z.object({
    courseName: z.coerce.string(),
    courseProvider: z.coerce.string(),
    dateOfCompletion: z.coerce.date(),
    facultyID: z.coerce.string(),
    certificateLink: z.coerce.string().url({ message: "Invalid URL" }).startsWith("https://", { message: "Secure URL required." }),
})

export type Course = z.infer<typeof CourseSchema>