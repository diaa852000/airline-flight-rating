import { Skeleton } from "@/components/ui/skeleton";

export default function ReviewsLoading() {
    return (
        <div className="main-container my-4 flex flex-col gap-2">
            <Skeleton className="h-[100px] rounded-lg"/>
            <Skeleton className="h-[100px] rounded-lg"/>
            <Skeleton className="h-[100px] rounded-lg"/>
            <Skeleton className="h-[100px] rounded-lg"/>
            <Skeleton className="h-[100px] rounded-lg"/>
        </div>
    )
}
