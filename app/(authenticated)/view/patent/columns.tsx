import { Button } from "@/components/ui/button";
import { Patent } from "@/types/Patent";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";

export const columns: ColumnDef<Patent>[] = [
    {
        accessorKey: "publisher",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Publisher
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "title",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Patent Title
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "dateOfPublication",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Date of Publication
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "facultyID",
        header: "Faculty ID",
    },
    {
        accessorKey: "journalLink",
        header: "Journal Link",
        cell: ({cell}) => {
            return (
                <Link href={cell.getValue() || "https://google.com"} className="flex hover:underline">
                    Link
                    <FaLink className="ml-1"/>
                </Link>
            )
        },
    },
]