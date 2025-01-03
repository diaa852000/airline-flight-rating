import ReviewCard from "@/components/ReviewCard";
import { getUserReviewsFlight } from "@/helpers/db";
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";
import {unstable_noStore as noStore} from 'next/cache'

export default async function reviewsPage() {
    noStore();
    const user = await currentUser();

    if (!user) {
        redirect('/sign-in');
    }

    const userReviewedFlights = await getUserReviewsFlight(user.id);

    return (
        <section className="main-container my-8">
            <h1 className="text-3xl font-bold my-5">
                Reviews
            </h1>
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
