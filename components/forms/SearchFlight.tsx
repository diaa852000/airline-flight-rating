"use client";


import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SearchTripForm() {

    return (
        <form
            className="mt-8 max-w-xl mx-auto"
        >
            <div className="flex">
                <Input
                    type="text"
                    name="flightNumber"
                    placeholder="Enter Trip Name or Number"
                    className="border-e-0 h-[50px] bg-white rounded-sm rounded-e-none text-muted-foreground ring-0 ring-transparent outline-none !outline-0 !outline-transparent"
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
