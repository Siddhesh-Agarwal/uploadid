"use client";

import { Suspense, useEffect, useState } from "react";
import { DataTable } from "@/components/ui/data-table";
import TableSkeleton from "@/components/TableSkeleton";
import { courseTable } from "@/db/schema";
import { columns } from "./columns";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import CourseForm from "./form";

type Course = typeof courseTable.$inferSelect;

export default function ViewCertificationsPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  const fetchCourses = async () => {
    await fetch("/api/course")
      .then((response) => response.json() as Promise<Course[]>)
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <main className="w-full px-3 py-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
        Certifications
      </h1>
      <div className="container mx-auto py-10">
        <Suspense fallback={<TableSkeleton />}>
          <DataTable data={courses} columns={columns} />
        </Suspense>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <div className="rounded-full bg-green-500/50 hover:bg-green-500 border p-2 w-10 h-10 z-50 absolute bottom-12 right-12">
            <Plus />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add new certificates/cources</SheetTitle>
            <SheetDescription>
              Add information about new courses or certifications.
            </SheetDescription>
          </SheetHeader>
          <CourseForm />
        </SheetContent>
      </Sheet>
    </main>
  );
}
