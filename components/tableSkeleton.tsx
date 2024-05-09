import { Skeleton } from "./ui/skeleton";

export default function TableSkeleton() {
    return (
        <>
            <div className="inline-flex w-full gap-2 mb-3">
                <Skeleton className="h-8 w-1/3" />
                <Skeleton className="h-8 w-1/3" />
                <Skeleton className="h-8 w-1/3" />
            </div>
            <div className="inline-flex w-full gap-2">
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-5 w-1/3" />
            </div>
            <div className="inline-flex w-full gap-2">
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-5 w-1/3" />
            </div>
            <div className="inline-flex w-full gap-2">
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-5 w-1/3" />
            </div>
            <div className="inline-flex w-full gap-2">
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-5 w-1/3" />
            </div>
            <div className="inline-flex w-full gap-2">
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-5 w-1/3" />
                <Skeleton className="h-5 w-1/3" />
            </div>
        </>
    )
}