import { Button } from "@/components/ui/button";
import { Conference } from "@/types/Conference";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Link2 } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<Conference>[] = [
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
        accessorKey: "eventName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Event Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "dateOfEvent",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Date of Event
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ cell }) => {
            return (
                (cell.getValue() as Date).toLocaleDateString()
            )
        }
    },
    {
        accessorKey: "eventVenue",
        header: "Event Venue",
    },
    {
        accessorKey: "link",
        header: "Link",
        cell: ({ cell }) => {
            return (
                <Link href={cell.getValue() || "https://google.com"} className="flex hover:underline" target="_blank">
                    Link
                    <Link2 className="ml-1" />
                </Link>
            )
        }
    },
]
