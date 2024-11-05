/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { XIcon } from "lucide-react";
import { IReviewModelProps } from "@/types";
import CreateReviewForm from "./forms/CreateReviewForm";

export default function ReviewModel({flightId, userId}: IReviewModelProps) {
    const [open, setOpen] = useState<boolean>(false);
    const handleToggleModel = () => setOpen(prev => !prev)


    return (
        <>
            <Button onClick={handleToggleModel}>
                Review
            </Button>
            <div className={`${open ? 'fixed w-full h-full bg-black/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center' : 'hidden'}`}>
                <div className="w-[1000px] m-10 bg-muted z-10 p-4 rounded-lg shadow-xl">
                    <div className="flex justify-between items-center pb-4 px-2 border-b border-muted-foreground">
                        <h1 className="order-1 text-lg font-medium dark:text-gray-200">
                            Please Fill up the Review
                        </h1>
                        <Button
                            onClick={handleToggleModel}
                            variant={"destructive"}
                            size={"icon"}
                            className="order-2"
                        >
                            <XIcon />
                        </Button>
                    </div>
                    <div className="mt-4">
                        <CreateReviewForm
                            userId={userId}
                            flightId={flightId}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
