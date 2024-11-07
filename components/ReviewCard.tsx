/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateFormatter, priceFormatter } from "@/helpers";
import { ArrowRightLeft } from "lucide-react";
import Link from "next/link";

export default function ReviewCard({ data }: { data: any }) {
    return (
        <Link
            href={`/flights/${data.id}`}
            className="rounded-xl p-6 bg-muted w-full shadow-sm flex flex-col items-center md:flex-row md:justify-between gap-8 hover:bg-muted"
        >
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 tracking-wide">
                <div className="flex md:flex-col gap-x-4 md:gap-x-0 md:gap-y-2">
                    <p className="text-xl md:text-lg font-semibold capitalize">{data.fromCountry}</p>
                    <div className="flex items-center gap-2 text-sm">
                        <p className="font-semibold dark:text-gray-300">Departure:</p>
                        <p className="text-muted-foreground font-medium"> {DateFormatter(new Date(data?.startTime).toLocaleDateString())}</p>
                    </div>
                </div>

                <div className="self-center bg-muted-foreground/15 w-11 h-11 rounded-full flex items-center justify-center text-muted-foreground">
                    <ArrowRightLeft />
                </div>

                <div className="flex md:flex-col gap-x-4 md:gap-x-0 md:gap-y-2">
                    <p className="text-xl md:text-lg font-semibold capitalize">{data.toCountry}</p>
                    <div className="flex items-center gap-2 text-sm">
                        <p className="font-semibold dark:text-gray-300">Return:</p>
                        <p className="text-muted-foreground font-medium"> {DateFormatter(new Date(data?.endTime).toLocaleDateString())}</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p className="font-extrabold text-lg tracking-wide">{priceFormatter(data?.price).slice(0, -3)}</p>
                <p className="text-sm text-muted-foreground/90 mt-1 font-medium">per 1 person</p>
                {data.averageRating
                    ? <p className="text-sm text-muted-foreground/90 mt-1 font-bold">{data.averageRating.toFixed(2)}/5</p>
                    : <p className="text-sm text-muted-foreground/90 mt-1 font-bold">NA/5</p>
                }
            </div>
        </Link>
    )
}
