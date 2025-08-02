import { Button } from "@/components/ui/button";
import { Faculty } from "@/types/Faculty";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Link2 } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<Faculty>[] = [
    {
        accessorKey: "facultyID",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Faculty ID
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "facultyName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Faculty Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "department",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Department
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "designation",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Designation
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "email",
        header: "Email ID",
        cell: ({ cell }) => {
            return (
                <Link href={`mainto:${cell.getValue() || "admin@skcet.ac.in"}`} className="flex hover:underline">
                    Link
                    <Link2 className="ml-1" />
                </Link>
            )
        }
    },
]
