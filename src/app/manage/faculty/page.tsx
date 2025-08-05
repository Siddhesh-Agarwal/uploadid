"use client";

import { Suspense, useEffect, useState } from "react";
import { DataTable } from "@/components/ui/data-table";
import TableSkeleton from "@/components/TableSkeleton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { facultyTable } from "@/db/schema";
import { columns } from "./columns";
import FacultyForm from "./form";
import { Plus } from "lucide-react";

type Faculty = typeof facultyTable.$inferSelect;

export default function ViewFacultyPage() {
  const [faculties, setFaculties] = useState<Faculty[]>([]);
  const fetchFaculties = async () => {
    await fetch("/api/faculty")
      .then((response) => response.json())
      .then((data) => setFaculties(data))
      .catch((error) => console.error("Error fetching faculties:", error));
  };

  useEffect(() => {
    fetchFaculties();
  }, []);

  return (
    <main className="w-full px-3 py-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
        Faculties
      </h1>
      <div className="container mx-auto py-10">
        <Suspense fallback={<TableSkeleton />}>
          <DataTable data={faculties} columns={columns} />
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
            <SheetTitle>Add faculty</SheetTitle>
            <SheetDescription>Add information about faculty</SheetDescription>
          </SheetHeader>
          <FacultyForm />
        </SheetContent>
      </Sheet>
    </main>
  );
}
