import { db } from "@/app/db";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Patent, PatentSchema, patentTable } from "@/types/Patent";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { FaCalendar } from "react-icons/fa6";

export default function PatentForm() {
    const form = useForm<Patent>({
        resolver: zodResolver(PatentSchema)
    })
    async function onSubmit(values: Patent) {
        await db.insert(patentTable).values(values);
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <h1 className="scroll-m-20 text-4xl text-center mb-4 font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                    Patent
                </h1>

                <FormField
                    control={form.control}
                    name="publisher"
                    render={({ field }) => (
                        <FormItem className="ml-1">
                            <FormLabel>
                                Publisher
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="ArXive" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem className="ml-1">
                            <FormLabel>
                                Title
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="Patent title here..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex flex-row">
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

                    <FormField
                        control={form.control}
                        name="journalLink"
                        render={({ field }) => (
                            <FormItem className="w-1/2 ml-1">
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
                </div>

                <FormField
                        control={form.control}
                        name="dateOfPublication"
                        render={({ field }) => (
                            <FormItem className="w-full mr-1">
                                <FormLabel>Date of Publication</FormLabel>
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

                <Button type="submit" variant={"outline"} className="bg-green-400 hover:bg-green-500 w-full">
                    Submit
                </Button>
            </form>
        </Form>
    )
}
