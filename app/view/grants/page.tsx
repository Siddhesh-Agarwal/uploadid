import { Grant, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"

const grants: Grant[] = [
    { "proposedBy": "Ofelia Vaggers", "title": "Domainer", "appliedOn": "2021-07-29", "grantAmount": 359800, "status": false },
    { "proposedBy": "Brietta Caitlin", "title": "Rank", "appliedOn": "2021-03-13", "grantAmount": 92894, "status": false },
    { "proposedBy": "Tanner Hickisson", "title": "Hatity", "appliedOn": "2021-02-23", "grantAmount": 449517, "status": false },
    { "proposedBy": "Aarika Goslin", "title": "Mat Lam Tam", "appliedOn": "2023-03-20", "grantAmount": 298961, "status": true },
    { "proposedBy": "Cyrillus Casley", "title": "Sonsing", "appliedOn": "2021-08-02", "grantAmount": 497454, "status": true },
    { "proposedBy": "Georg Karppi", "title": "Tresom", "appliedOn": "2022-02-24", "grantAmount": 294820, "status": true },
    { "proposedBy": "Beryle Casassa", "title": "Zaam-Dox", "appliedOn": "2021-10-12", "grantAmount": 310695, "status": true },
    { "proposedBy": "Julita Vasishchev", "title": "Stringtough", "appliedOn": "2023-01-09", "grantAmount": 432640, "status": true },
    { "proposedBy": "Job Snead", "title": "Redhold", "appliedOn": "2023-10-11", "grantAmount": 255586, "status": false },
    { "proposedBy": "Karrah Wyborn", "title": "Fixflex", "appliedOn": "2023-08-16", "grantAmount": 323195, "status": false },
    { "proposedBy": "Joycelin Barlass", "title": "Cardguard", "appliedOn": "2021-04-06", "grantAmount": 290501, "status": true },
    { "proposedBy": "Shadow Beesey", "title": "Domainer", "appliedOn": "2020-03-04", "grantAmount": 106384, "status": false },
    { "proposedBy": "Binky Argabrite", "title": "Hatity", "appliedOn": "2022-03-08", "grantAmount": 98476, "status": true },
    { "proposedBy": "Ferrell Donizeau", "title": "Span", "appliedOn": "2023-07-09", "grantAmount": 395764, "status": false },
    { "proposedBy": "Beniamino Caurah", "title": "Vagram", "appliedOn": "2023-07-05", "grantAmount": 172652, "status": false },
    { "proposedBy": "Pearce Gaisford", "title": "Kanlam", "appliedOn": "2020-07-04", "grantAmount": 188432, "status": false },
    { "proposedBy": "Caroljean Tatlock", "title": "Lotstring", "appliedOn": "2020-12-12", "grantAmount": 358708, "status": false },
    { "proposedBy": "Roby Iczokvitz", "title": "Greenlam", "appliedOn": "2022-08-26", "grantAmount": 340502, "status": true },
    { "proposedBy": "Ashil Hutt", "title": "Stringtough", "appliedOn": "2023-07-09", "grantAmount": 383703, "status": false },
    { "proposedBy": "Sileas Slater", "title": "Konklux", "appliedOn": "2021-12-30", "grantAmount": 250063, "status": false }
]

export default function ViewGrantsPage() {
    return (
        <main className="w-full px-3 py-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mx-2 md:mx-6 lg:mx-10">
                Grants
            </h1>
            <div className="container mx-auto py-10">
                <DataTable data={grants} columns={columns} />
            </div>
        </main>
    )
}
