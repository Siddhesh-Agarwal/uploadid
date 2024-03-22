import { db } from "@/app/db";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Conference, ConferenceSchema, conferenceTable } from "@/types/Conference";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { FaCalendar } from "react-icons/fa6";

export default function ConferenceForm() {
    const form = useForm<Conference>({
        resolver: zodResolver(ConferenceSchema)
    });
    async function onSubmit(values: Conference) {
        await db.insert(conferenceTable).values(values);
        console.log(values);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <h1 className="scroll-m-20 text-4xl text-center mb-4 font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                    Conferences
                </h1>

                <FormField
                    control={form.control}
                    name="facultyID"
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
                    name="eventName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Event Name
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="Jane Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex flex-row w-full">
                    <FormField
                        control={form.control}
                        name="eventVenue"
                        render={({ field }) => (
                            <FormItem className="w-1/2 mr-1">
                                <FormLabel>
                                    Event Venue
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="Jane Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="dateOfEvent"
                        render={({ field }) => (
                            <FormItem className="w-1/2 ml-1">
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
                </div>

                <FormField
                    control={form.control}
                    name="link"
                    render={({ field }) => (
                        <FormItem className="">
                            <FormLabel>
                                Certificate Link
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