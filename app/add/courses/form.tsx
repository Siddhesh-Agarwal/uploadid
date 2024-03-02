import { z } from "zod";
import { Course } from "@/types/Course";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    courseName: z.coerce.string(),
    courseProvider: z.coerce.string(),
    dateOfCompletion: z.coerce.date(),
    facultyId: z.coerce.string(),
    certificateLink: z.coerce.string().url({ message: "Invalid URL" }).startsWith("https", { message: "Secure URL required." }),
})

export default function CourseForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // TODO: add to supabase
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <h1 className="scroll-m-20 text-4xl text-center mb-4 font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                    Add Completed Course
                </h1>
                <FormField
                    control={form.control}
                    name="courseName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Course Name
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="Engineering Ethics" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="courseProvider"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Course Provider
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="Coursera" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="facultyId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Faculty ID
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="CSE001" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="certificateLink"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Link
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="https://drive.google.com/" {...field} type="url" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </Form>
    )
}