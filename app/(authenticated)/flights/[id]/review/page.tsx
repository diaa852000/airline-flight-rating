import CreateReviewForm from "@/components/forms/CreateReviewForm";
import { Card } from "@/components/ui/card";
import { GetFlightById } from "@/helpers/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function CreateReivewPage() {
    const user = await currentUser();
    if(!user) redirect('/sign-in');

    return (
        <section className="main-container">
            <Card>
                {/* <CreateReviewForm/> */}
            </Card>
        </section>
    )
}
