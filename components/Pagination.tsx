"use client";

import { IPagination } from "@/types";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Pagination({ page, hasPrev, hasNext }: IPagination) {
    const router = useRouter();

    const nextPage = () => router.push(`?page=${page + 1}`);

    const prevPage = () => router.push(`?page=${page - 1}`);

    return (
        <div className="flex justify-between">
            <Button
                type="button"
                className="disabled:cursor-not-allowed disabled:bg-opacity-40"
                disabled={!hasPrev}
                onClick={prevPage}
            >
                Previous
            </Button>
            <Button
                type="button"
                className="disabled:cursor-not-allowed disabled:bg-opacity-40"
                onClick={nextPage}
                disabled={!hasNext}
            >
                Next
            </Button>
        </div>
    )
}
