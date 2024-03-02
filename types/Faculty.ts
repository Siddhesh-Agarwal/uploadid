import { z } from "zod"

export const departments: unknown = ["CSE", "IT", "AIDS", "CSBS", "MTech. CSE", "CSE CS", "CSD", "ECE", "EEE", "MECH", "MCT", "CIVIL"]
export const designations: unknown = ["Assistant Professor", "Assosiate Professor", "Professor"]
export const FacultySchema = z.object({
    facultyName: z.coerce.string(),
    department: z.enum(departments as const),
    designation: z.enum(designations as const),
    email: z.coerce.string().toLowerCase().email({ message: "Invalid Email" }).endsWith("@skcet.ac.in", {message: "Use @skcet.ac.in mail"}),
    facultyID: z.coerce.string().toUpperCase(),
})

export type Faculty = z.infer<typeof FacultySchema>