import { db } from "@/app/db";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Journal, JournalNames, JournalPublishers, JournalSchema, JournalTypes, journalTable } from "@/types/Journal"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns";
import { useForm } from "react-hook-form"
import { FaCalendar } from "react-icons/fa6";

export default function JournalForm() {
    const form = useForm<Journal>({
        resolver: zodResolver(JournalSchema),
        defaultValues: {
            journalType: ["Wos", "Scopus", "UGC care"],
        },
    })
    async function onSubmit(values: Journal) {
        await db.insert(journalTable).values(values);
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <h1 className="scroll-m-20 text-4xl text-center mb-4 font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                    Journal
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
                                <Input placeholder="CSE123" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex flex-row">
                    <FormField
                        control={form.control}
                        name="publisher"
                        render={({ field }) => (
                            <FormItem className="w-1/2 mr-1">
                                <FormLabel>Publisher Name</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select the Publisher" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {
                                            JournalPublishers.map((publisher: string, index: number) => {
                                                return (
                                                    <SelectItem value={publisher} key={index}>{publisher}</SelectItem>
                                                )
                                            })
                                        }
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="nameOfJournal"
                        render={({ field }) => (
                            <FormItem className="w-1/2 ml-1">
                                <FormLabel>Journal Name</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select the Journal" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {
                                            JournalNames.map((names: string, index: number) => {
                                                return (
                                                    <SelectItem value={names} key={index}>{names}</SelectItem>
                                                )
                                            })
                                        }
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="journalType"
                    render={() => (
                        <FormItem>
                            <div className="mb-4">
                                <FormLabel className="text-base">Journal Type</FormLabel>
                            </div>
                            {
                                JournalTypes.map((item) => (
                                    <FormField
                                        key={item}
                                        control={form.control}
                                        name="journalType"
                                        render={({ field }) => {
                                            return (
                                                <FormItem
                                                    key={item}
                                                    className="flex flex-row items-start space-x-3 space-y-0"
                                                >
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value?.includes(item)}
                                                            onCheckedChange={(checked) => {
                                                                return checked
                                                                    ? field.onChange([...field.value, item])
                                                                    : field.onChange(
                                                                        field.value?.filter(
                                                                            (value) => value !== item
                                                                        )
                                                                    )
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        {item}
                                                    </FormLabel>
                                                </FormItem>
                                            )
                                        }}
                                    />
                                ))
                            }
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex flex-row">
                    <FormField
                        control={form.control}
                        name="dateOfPublication"
                        render={({ field }) => (
                            <FormItem className="w-1/2 mr-1">
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

                    <FormField
                        control={form.control}
                        name="DOI"
                        render={({ field }) => (
                            <FormItem className="w-1/2 ml-1">
                                <FormLabel>
                                    DOI
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="1234567da890" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex flex-row">
                    <FormField
                        control={form.control}
                        name="issueNumber"
                        render={({ field }) => (
                            <FormItem className="w-1/2 mr-1">
                                <FormLabel>
                                    Issue Number
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="11" {...field} type="number" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="volumeNumber"
                        render={({ field }) => (
                            <FormItem className="w-1/2 ml-1">
                                <FormLabel>
                                    Volume Number
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="3" {...field} type="number" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex flex-row">
                    <FormField
                        control={form.control}
                        name="paperLink"
                        render={({ field }) => (
                            <FormItem className="w-1/2 mr-1">
                                <FormLabel>
                                    Paper Link
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="https://drive.google.com/" {...field} type="url" />
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
                                    Journal Link
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="https://drive.google.com/" {...field} type="url" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button type="submit" variant={"outline"} className="bg-green-400 hover:bg-green-500 w-full">
                    Submit
                </Button>
            </form>
        </Form>
    )
}