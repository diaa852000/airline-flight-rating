"use client";

import { useFormState } from "react-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { initalState } from "@/constants";
import { useEffect } from "react";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";

export default function SearchTripForm() {
    const searchParams = useSearchParams()
    // const [state, formAction] = useFormState(() => TripSearchAction(searchParams.get("trip")), initalState);


    // useEffect(() => {
    //     if (state.status === "success") {
    //         toast.success(state.message);
    //     } else if (state.status === "error") {
    //         toast.error(state.message);
    //     }
    // }, [state.status, state.message, state.errors])


    useEffect(() => {
        console.log(searchParams);
    }, [searchParams])

    return (
        <form
            // action={formAction}
            className="mt-8 max-w-xl mx-auto"
        >
            <div className="flex">
                <Input
                    type="text"
                    name="trip"
                    placeholder="Enter Trip Name or Number"
                    className="border-e-0 h-[50px] bg-white rounded-sm rounded-e-none text-muted-foreground ring-0 ring-transparent outline-none"
                />
                <Button
                    className="rounded-sm rounded-s-none h-[50px] w-1/4 font-medium text-lg"
                    type="submit"
                >
                    Find
                </Button>
            </div>
        </form>
    )
}
