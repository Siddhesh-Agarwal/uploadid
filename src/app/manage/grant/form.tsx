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
import { Grant, GrantSchema } from "@/types/Grant";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { CalendarDays } from "lucide-react";
import { toast } from "sonner";
import { facultyTable, grantStatus } from "@/db/schema";
import { useDataStore } from "@/zustand/provider";
import { useEffect, useState } from "react";
import { MultiSelect } from "@/components/ui/multiselect";

export default function GrantForm() {
  const form = useForm<Grant>({
    resolver: zodResolver(GrantSchema),
  });
  const [faculty, setFaculty] = useState<(typeof facultyTable.$inferSelect)[]>(
    []
  );
  const { instituteID } = useDataStore((state) => state);

  async function onSubmit(values: Grant) {
    await fetch("/api/grant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Grant information added successfully!");
        form.reset();
      })
      .catch(() => {
        toast.error("Failed to add grant information!");
      });
  }

  useEffect(() => {
    fetch(`/api/faculty?institute?=${instituteID}`)
      .then((response) => response.json())
      .then((data) => setFaculty(data))
      .catch((error) => console.error("Error fetching grants:", error));
  }, [instituteID]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="proposedBy"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Proposed by</FormLabel>
              <FormControl>
                {/* <Input placeholder="Jane Doe" {...field} /> */}
                {/* Use multiselect option */}
                <MultiSelect
                  placeholder="Select the faculty"
                  options={faculty.map((item) => {
                    return {
                      label: item.facultyName,
                      value: item.id,
                    };
                  })}
                  selectedOptions={field.value}
                  setSelectedOptions={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Jane Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-row">
          <FormField
            control={form.control}
            name="appliedOn"
            render={({ field }) => (
              <FormItem className="w-1/2 mr-1">
                <FormLabel>Date of Application</FormLabel>
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
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="grantAmount"
            render={({ field }) => (
              <FormItem className="w-1/2 ml-1">
                <FormLabel>Grant Amount (in Rs.)</FormLabel>
                <FormControl>
                  <Input placeholder="100000" {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the Status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {grantStatus.enumValues.map(
                    (staus: string, index: number) => {
                      return (
                        <SelectItem value={staus} key={index}>
                          {staus}
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
