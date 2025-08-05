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
import { grantTable } from "@/db/schema";
import { Plus } from "lucide-react";
import { columns } from "./columns";
import GrantForm from "./form";

type Grant = typeof grantTable.$inferSelect;

export default function ViewGrantsPage() {
  const [grants, setGrants] = useState<Grant[]>([]);

  const fetchGrants = async () => {
    await fetch("/api/grant")
      .then((response) => response.json())
      .then((data) => setGrants(data))
      .catch((error) => console.error("Error fetching grants:", error));
  };

  useEffect(() => {
    fetchGrants();
  }, []);

  return (
    <main className="w-full px-3 py-6">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
        Grants
      </h1>
      <div className="container mx-auto py-10">
        <Suspense fallback={<TableSkeleton />}>
          <DataTable data={grants} columns={columns} />
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
            <SheetTitle>Add new grant</SheetTitle>
            <SheetDescription>
              Add information about grants recieved
            </SheetDescription>
          </SheetHeader>
          <GrantForm />
        </SheetContent>
      </Sheet>
    </main>
  );
}
