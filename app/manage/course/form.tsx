"use client";

import { Course, CourseSchema } from "@/types/Course";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react/icons"
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";

export default function CourseForm() {
    const form = useForm<Course>({
        resolver: zodResolver(CourseSchema)
    })
    async function onSubmit(values: Course) {
        fetch(`/api/course`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
        })
            .then(response => response.json())
            .then(() => {
                toast.success("Course information added successfully!")
                form.reset();
            })
            .catch(() => {
                toast.error("Failed to add course information!")
            });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                                                <CalendarDays className="ml-auto h-4 w-4 opacity-50" />
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
