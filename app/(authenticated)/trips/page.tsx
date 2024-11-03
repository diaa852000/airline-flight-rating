import CreateTripForm from "@/components/forms/CreateTrip";
import { Card } from "@/components/ui/card";

export default function TripsPage() {
    return (
        <section className="main-container">
            <Card>
                <CreateTripForm/>
            </Card>
        </section>
    )
}
