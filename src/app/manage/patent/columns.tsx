import { Button } from "@/components/ui/button";
import { patentTable } from "@/db/schema";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Link2 } from "lucide-react";
import Link from "next/link";

type Patent = typeof patentTable.$inferSelect;

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
          Patent Title
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
    accessorKey: "facultyID",
    header: "Faculty ID",
  },
  {
    accessorKey: "journalLink",
    header: "Journal Link",
    cell: ({ cell }) => {
      const href = cell.getValue();
      if (!href) return null;
      return (
        <Link href={href} className="flex hover:underline">
          Link
          <Link2 className="ml-1" />
        </Link>
      );
    },
  },
];
