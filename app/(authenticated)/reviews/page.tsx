import ReviewCard from "@/components/ReviewCard";
import { getUserReviewsFlight } from "@/helpers/db";
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

export default async function reviewsPage() {
    const user = await currentUser();

    if (!user) {
        redirect('/sign-in');
    }

    const userReviewedFlights = await getUserReviewsFlight(user.id);

    return (
        <section className="main-container">
            <div className="flex flex-col gap-2">
                {userReviewedFlights.map(userReviewedFlight => (
                    <ReviewCard
                        data={userReviewedFlight}
                        key={userReviewedFlight.id}
                    />
                ))}
            </div>
        </section>
    )
}
