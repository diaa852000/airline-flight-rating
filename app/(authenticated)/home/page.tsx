import SearchTripForm from "@/components/forms/SearchFlight";
import ReviewCard from "@/components/ReviewCard";
import { getNewestReviewsForUser } from "@/helpers/db";
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

export default async function HomePage() {
    const user = await currentUser();
    if (!user) redirect('/');

    const newestReviwes = await getNewestReviewsForUser(user.id)

    return (
        <section className="main-container">
            <div className="max-w-4xl mx-auto mt-20">
                <h1 className="text-4xl md:text-5xl text-center font-bold mt-10">Welcome,<span className="text-primary mx-2">{user.firstName}</span>👋</h1>
                <h2 className="text-2xl  text-center text-pretty text-muted-foreground mt-6">
                    Discover your next flight and share valuable feedback to enhance travel experiences for everyone!
                </h2>
                <p className="text-xl text-center text-muted-foreground/80 mt-4 font-medium">
                    Search your Trip, Just wirte your trip number down blowe!
                </p>
                <SearchTripForm />
            </div>
            <div className="mt-24">
                <h3 className="text-3xl font-bold mb-6">Latest Flights Reviewed</h3>
                <div className="flex flex-col gap-4">
                    {newestReviwes
                        ? newestReviwes.map(item => (
                            <div key={item.id}>
                                <ReviewCard data={item.flight} />
                            </div>))
                        : <h2 className="text-2xl mt-2 text-muted-foreground">No Reviewed Flights Add yet!</h2>
                    }
                </div>
            </div>
        </section>
    )
}
