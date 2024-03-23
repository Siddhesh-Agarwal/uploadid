import { Course, CourseSchema } from "@/types/Course";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { FaCalendar } from "react-icons/fa6";
import { Calendar } from "@/components/ui/calendar";

export default function CourseForm() {
    const form = useForm<Course>({
        resolver: zodResolver(CourseSchema)
    })
    async function onSubmit(values: Course) {
        // TODO: add to supabase
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <h1 className="scroll-m-20 text-4xl text-center mb-4 font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                    Courses
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

                <div className="flex flex-row">
                    <FormField
                        control={form.control}
                        name="dateOfCompletion"
                        render={({ field }) => (
                            <FormItem className="w-1/2 mr-1">
                                <FormLabel>Date of Completion</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <FaCalendar className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date > new Date() || date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="facultyID"
                        render={({ field }) => (
                            <FormItem className="w-1/2 ml-1">
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
                </div>

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

                <Button type="submit" variant={"outline"} className="bg-green-400 hover:bg-green-500 w-full">
                    Submit
                </Button>
            </form>
        </Form>
    )
}