import { DataTable } from "@/components/ui/data-table"
import { Grant } from "@/types/Grant"
import { columns } from "./columns"

const grants: Grant[] = [
    { "proposedBy": "Ofelia Vaggers", "title": "Domainer", "appliedOn": new Date("2021-07-29"), "grantAmount": 359800, "status": "Accepted" },
    { "proposedBy": "Brietta Caitlin", "title": "Rank", "appliedOn": new Date("2021-03-13"), "grantAmount": 92894, "status": "Rejected" },
    { "proposedBy": "Tanner Hickisson", "title": "Hatity", "appliedOn": new Date("2021-02-23"), "grantAmount": 449517, "status": "Rejected" },
    { "proposedBy": "Aarika Goslin", "title": "Mat Lam Tam", "appliedOn": new Date("2023-03-20"), "grantAmount": 298961, "status": "Accepted" },
    { "proposedBy": "Cyrillus Casley", "title": "Sonsing", "appliedOn": new Date("2021-08-02"), "grantAmount": 497454, "status": "Accepted" },
    { "proposedBy": "Georg Karppi", "title": "Tresom", "appliedOn": new Date("2022-02-24"), "grantAmount": 294820, "status": "Accepted" },
    { "proposedBy": "Beryle Casassa", "title": "Zaam-Dox", "appliedOn": new Date("2021-10-12"), "grantAmount": 310695, "status": "Accepted" },
    { "proposedBy": "Julita Vasishchev", "title": "Stringtough", "appliedOn": new Date("2023-01-09"), "grantAmount": 432640, "status": "Accepted" },
    { "proposedBy": "Job Snead", "title": "Redhold", "appliedOn": new Date("2023-10-11"), "grantAmount": 255586, "status": "Rejected" },
    { "proposedBy": "Karrah Wyborn", "title": "Fixflex", "appliedOn": new Date("2023-08-16"), "grantAmount": 323195, "status": "Rejected" },
    { "proposedBy": "Joycelin Barlass", "title": "Cardguard", "appliedOn": new Date("2021-04-06"), "grantAmount": 290501, "status": "Accepted" },
    { "proposedBy": "Shadow Beesey", "title": "Domainer", "appliedOn": new Date("2020-03-04"), "grantAmount": 106384, "status": "Rejected" },
    { "proposedBy": "Binky Argabrite", "title": "Hatity", "appliedOn": new Date("2022-03-08"), "grantAmount": 98476, "status": "Accepted" },
    { "proposedBy": "Ferrell Donizeau", "title": "Span", "appliedOn": new Date("2023-07-09"), "grantAmount": 395764, "status": "Rejected" },
    { "proposedBy": "Beniamino Caurah", "title": "Vagram", "appliedOn": new Date("2023-07-05"), "grantAmount": 172652, "status": "Waiting" },
    { "proposedBy": "Pearce Gaisford", "title": "Kanlam", "appliedOn": new Date("2020-07-04"), "grantAmount": 188432, "status": "Rejected" },
    { "proposedBy": "Caroljean Tatlock", "title": "Lotstring", "appliedOn": new Date("2020-12-12"), "grantAmount": 358708, "status": "Waiting" },
    { "proposedBy": "Roby Iczokvitz", "title": "Greenlam", "appliedOn": new Date("2022-08-26"), "grantAmount": 340502, "status": "Accepted" },
    { "proposedBy": "Ashil Hutt", "title": "Stringtough", "appliedOn": new Date("2023-07-09"), "grantAmount": 383703, "status": "Waiting" },
    { "proposedBy": "Sileas Slater", "title": "Konklux", "appliedOn": new Date("2021-12-30"), "grantAmount": 250063, "status": "Rejected" }
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
