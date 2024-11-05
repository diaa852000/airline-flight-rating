import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CreateFlightLoading() {
    return (
        <div className="main-container">
            <Card>
                <CardHeader className="h-[1000px]">
                    <Skeleton className="w-full h-full"/>
                </CardHeader>
            </Card>
        </div>
    )
}
