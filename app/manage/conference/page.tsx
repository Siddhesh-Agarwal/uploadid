"use client"

import { Suspense, useEffect, useState } from 'react'
import { DataTable } from "@/components/ui/data-table";
import SignInToView from "@/components/SignInToView";
import TableSkeleton from "@/components/TableSkeleton";
import { Conference } from "@/types/Conference";
import { columns } from "./columns";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import ConferenceForm from './form';
import { Plus } from 'lucide-react';


export default function ViewConferencesPage() {
    const [conferences, setConferences] = useState<Conference[]>([])
    const fetchConferences = async () => {
        await fetch('/api/conferences')
            .then(response => response.json())
            .then(data => setConferences(data))
            .catch(error => console.error('Error fetching conferences:', error))
    }

    useEffect(() => {
        fetchConferences()
    }, [])


    return (
        <SignInToView>
            <main className="w-full px-3 py-6">
                {/* Heading */}
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                    Conferences
                </h1>
                {/* Table to display the conferences */}
                <div className="container mx-auto py-10">
                    <Suspense fallback={<TableSkeleton />}>
                        <DataTable data={conferences} columns={columns} />
                    </Suspense>
                </div>
                {/* Floating button to add a new conference */}
                <Sheet>
                    <SheetTrigger asChild>
                        <div className='rounded-full bg-green-500/50 hover:bg-green-500 border p-2 w-10 h-10 z-50 absolute bottom-12 right-12'>
                            <Plus />
                        </div>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>
                                Add new conference
                            </SheetTitle>
                            <SheetDescription>
                                Add information about conference attended by faculties.
                            </SheetDescription>
                        </SheetHeader>
                        <ConferenceForm />
                    </SheetContent>
                </Sheet>
            </main>
        </SignInToView>
    )
}
