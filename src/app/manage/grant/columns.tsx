"use client";

import { Button } from "@/components/ui/button";
import { grantTable } from "@/db/schema";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

type Grant = typeof grantTable.$inferSelect;

export const columns: ColumnDef<Grant>[] = [
  {
    accessorKey: "proposedBy",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Proposed by
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
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
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "appliedOn",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Applied on
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ cell }) => {
      return (cell.getValue() as Date).toLocaleDateString();
    },
  },
  {
    accessorKey: "grantAmount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Grant Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("grantAmount"));
      const formatted = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(amount);

      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ cell }) => {
      if (cell.getValue() === "Accepted") {
        return <span className="rounded px-2 py-1 bg-green-400">Accepted</span>;
      } else if (cell.getValue() === "Rejected") {
        return <span className="rounded px-2 py-1 bg-red-400">Rejected</span>;
      } else {
        return <span className="rounded px-2 py-1 bg-gray-400">Waiting</span>;
      }
    },
  },
];
