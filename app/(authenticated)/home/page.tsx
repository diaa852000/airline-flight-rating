import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

export default async function HomePage() {
    const user = await currentUser();
    if (!user) redirect('/');

    return (
        <section className="main-container py-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl text-center font-bold mt-10">Welcome,<span className="text-primary mx-2">{user.firstName}</span>👋</h1>
                <h2 className="text-2xl  text-center text-pretty text-muted-foreground mt-6 font-light">
                    Discover your next flight and share valuable feedback to enhance travel experiences for everyone!
                </h2>
                <p className="text-xl text-center text-muted-foreground/80 mt-4 font-medium">
                    Search your Trip, Just wirte your trip number down blowe!
                </p>
                <form
                    className="mt-8 max-w-xl mx-auto"
                >
                    <div className="flex">
                        <Input
                            type="text"
                            name="trip"
                            placeholder="Enter Trip Name or Number"
                            className="border-e-0 h-[50px] bg-white rounded-sm rounded-e-none"
                        />
                        <Button className="rounded-sm rounded-s-none h-[50px] w-1/4 font-medium text-lg">
                            Find
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
}
