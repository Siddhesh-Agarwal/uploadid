"use client";

import { Button } from "@/components/ui/button";
import { Journal } from "@/types/Journal";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Link2 } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<Journal>[] = [
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
      );
    },
  },
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
      );
    },
  },
  {
    accessorKey: "nameOfJournal",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name of Journal
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
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
      );
    },
  },
  {
    accessorKey: "DOI",
    header: "DOI",
  },
  {
    accessorKey: "paperLink",
    header: "Paper Link",
    cell: ({ cell }) => {
      return (
        <Link
          href={cell.getValue() || "https://google.com"}
          className="flex hover:underline"
        >
          Link
          <Link2 className="ml-1" />
        </Link>
      );
    },
  },
  {
    accessorKey: "journalLink",
    header: "Journal Link",
    cell: ({ cell }) => {
      return (
        <Link
          href={cell.getValue() || "https://google.com"}
          className="flex hover:underline"
        >
          Link
          <Link2 className="ml-1" />
        </Link>
      );
    },
  },
];
