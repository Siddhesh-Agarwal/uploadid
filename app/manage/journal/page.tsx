"use client";

import { Suspense } from "react";
import { DataTable } from "@/components/ui/data-table";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import SignInToView from "@/components/signInToView";
import TableSkeleton from "@/components/tableSkeleton";
import { Journal } from "@/types/Journal";
import { Plus } from "lucide-react";
import { columns } from "./columns";
import JournalForm from "./form";


const journals: Journal[] = []

export default function ViewJournalsPage() {
    return (
        <SignInToView>
            <main className="w-full px-3 py-6">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                    Journals
                </h1>
                <div className="container mx-auto py-10">
                    <Suspense fallback={<TableSkeleton />}>
                        <DataTable data={journals} columns={columns} />
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
                                Add Journal Information
                            </SheetTitle>
                            <SheetDescription>
                                Add the information ahout the journal publication
                            </SheetDescription>
                        </SheetHeader>
                        <JournalForm />
                    </SheetContent>
                </Sheet>
            </main>
        </SignInToView>
    )
}
