"use client";

import { Suspense, useEffect, useState } from "react";
import { DataTable } from "@/components/ui/data-table"
import SignInToView from "@/components/SignInToView";
import TableSkeleton from "@/components/TableSkeleton";
import { Patent } from "@/types/Patent";
import { columns } from "./columns"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import PatentForm from "./form";


export default function ViewPatentsPage() {
    const [patents, setPatents] = useState<Patent[]>([])
    const fetchPatents = async () => {
        await fetch("/api/patent")
            .then(response => response.json())
            .then(data => setPatents(data))
            .catch(error => console.error("Error fetching patents:", error));
    };

    useEffect(() => {
        fetchPatents();
    }, []);

    return (
        <SignInToView>
            <main className="w-full px-3 py-6">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                    Patents
                </h1>
                <div className="container mx-auto py-10">
                    <Suspense fallback={<TableSkeleton />}>
                        <DataTable columns={columns} data={patents} />
                    </Suspense>
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <div className='rounded-full bg-green-500/50 hover:bg-green-500 border p-2 w-10 h-10 z-50 absolute bottom-12 right-12'>
                            <Plus />
                        </div>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>
                                Add new certificates/cources
                            </SheetTitle>
                            <SheetDescription>
                                Add information about new courses or certifications.
                            </SheetDescription>
                        </SheetHeader>
                        <PatentForm />
                    </SheetContent>
                </Sheet>
            </main>
        </SignInToView>
    )
}
