"use client";

import JournalForm from "./form";

export default function AddJournalPage() {
    return (
        <main className="w-full px-3 py-6">
            <div className="container max-w-xl mx-auto py-10 border rounded-lg shadow-md">
                <JournalForm />
            </div>
        </main>
    )
}