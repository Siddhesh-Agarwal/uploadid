"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Journal, JournalSchema } from "@/types/Journal";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { CalendarDays } from "lucide-react";
import { toast } from "sonner";
import { journalType } from "@/db/schema";
import { useDataStore } from "@/zustand/provider";

export default function JournalForm() {
  const form = useForm<Journal>({
    resolver: zodResolver(JournalSchema),
  });
  const { userID } = useDataStore((state) => state);

  async function onSubmit(values: Journal) {
    await fetch("/api/journal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, facultyID: userID }),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Journal information added successfully!");
        form.reset();
      })
      .catch(() => {
        toast.error("Failed to add journal information!");
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-row">
          <FormField
            control={form.control}
            name="publisher"
            render={({ field }) => (
              <FormItem className="w-1/2 mr-1">
                <FormLabel>Publisher Name</FormLabel>
                <FormControl>
                  <Input placeholder="Publisher..." {...field} />
                </FormControl>
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
                <Input placeholder="Journal..." {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="journalType"
          render={({ field }) => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Journal Type</FormLabel>
              </div>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the Journal" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {journalType.enumValues.map(
                    (names: string, index: number) => {
                      return (
                        <SelectItem value={names} key={index}>
                          {names}
                        </SelectItem>
                      );
                    }
                  )}
                </SelectContent>
              </Select>
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
            name="DOI"
            render={({ field }) => (
              <FormItem className="w-1/2 ml-1">
                <FormLabel>DOI</FormLabel>
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
                <FormLabel>Issue Number</FormLabel>
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
                <FormLabel>Volume Number</FormLabel>
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
                <FormLabel>Paper Link</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://drive.google.com/"
                    {...field}
                    type="url"
                  />
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
                <FormLabel>Journal Link</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://drive.google.com/"
                    {...field}
                    type="url"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          variant={"outline"}
          className="bg-green-400 hover:bg-green-500 w-full"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
