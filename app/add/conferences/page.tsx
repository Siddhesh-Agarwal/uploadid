"use client";

import ConferenceForm from "./form";

export default function AddConferencePage() {
    return (
        <main className="w-full px-3 py-6">
            <div className="container max-w-xl mx-auto py-10 border rounded-lg shadow-md">
                <ConferenceForm />
            </div>
        </main>
    )
}