"use client";

import { Button } from "./ui/button";

export default function ReviewButton({id}:{id: string}) {
    return (
        <Button 
            onClick={() => console.log(`this is Model of ${id}`)}
        >
            Review
        </Button>
    )
}
