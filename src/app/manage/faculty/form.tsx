import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { departmentTable, designationTable } from "@/db/schema";
import { Faculty, FacultySchema } from "@/types/Faculty";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useDataStore } from "@/zustand/provider";

export default function FacultyForm() {
  const form = useForm<Faculty>({
    resolver: zodResolver(FacultySchema),
  });
  const { instituteID } = useDataStore((state) => state);
  const [departments, setDepartments] = useState<
    (typeof departmentTable.$inferSelect)[]
  >([]);
  const [designations, setDesignations] = useState<
    (typeof designationTable.$inferSelect)[]
  >([]);

  async function onSubmit(values: Faculty) {
    await fetch("/api/faculty", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Faculty information added successfully!");
        form.reset();
      })
      .catch(() => {
        toast.error("Failed to add faculty information!");
      });
  }

  useEffect(() => {
    fetch(`/api/departments?institute?=${instituteID}`)
      .then((response) => response.json())
      .then((data) => setDepartments(data))
      .catch((error) =>
        toast.error("Error fetching departments", { description: error })
      );
    fetch(`/api/designations?institute?=${instituteID}`)
      .then((response) => response.json())
      .then((data) => setDesignations(data))
      .catch((error) =>
        toast.error("Error fetching designations", { description: error })
      );
  }, [instituteID]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <h1 className="scroll-m-20 text-4xl text-center mb-4 font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
          Add Faculty
        </h1>

        <FormField
          control={form.control}
          name="facultyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Faculty Name</FormLabel>
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
            name="department"
            render={({ field }) => (
              <FormItem className="w-1/2 pr-1">
                <FormLabel>Department</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the department" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {departments.map((department) => (
                      <SelectItem value={department.name} key={department.id}>
                        {department.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="designation"
            render={({ field }) => (
              <FormItem className="w-1/2 pl-1">
                <FormLabel>Designation</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the designation" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {designations.map((designation) => (
                      <SelectItem value={designation.name} key={designation.id}>
                        {designation.id}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email ID</FormLabel>
              <FormControl>
                <Input
                  placeholder="janedoe@skcet.ac.in"
                  {...field}
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="facultyID"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Faculty ID</FormLabel>
              <FormControl>
                <Input placeholder="CSE001" {...field} />
              </FormControl>
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
