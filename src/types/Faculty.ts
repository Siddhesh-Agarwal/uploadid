import { z } from "zod";

export const FacultySchema = z.object({
  facultyID: z.string().max(10),
  facultyName: z.string().min(1),
  department: z.string().min(1),
  designation: z.string().min(1),
  email: z.email({ message: "Invalid Email" }),
});

export type Faculty = z.infer<typeof FacultySchema>;
