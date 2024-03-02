"use client";

import { Button } from "@/components/ui/button";
import { Course } from "@/types/Course";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import Link from "next/link";
import { FaLink } from "react-icons/fa6";

export const columns: ColumnDef<Course>[] = [
    {
        accessorKey: "courseName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Course Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "courseProvider",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Course Provider
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: "dateOfCompletion",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Date of Completion
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
        }
    },
    {
        accessorKey: "certificateLink",
        header: "Link",
        cell: ({ cell }) => {
            return (
                <Link href={cell.getValue() || "https://google.com"} className="flex hover:underline">
                    Link
                    <FaLink className="ml-1" />
                </Link>
            )
        }
    }
]