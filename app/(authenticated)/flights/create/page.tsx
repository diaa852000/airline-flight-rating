import CreateFlightForm from "@/components/forms/CreateFlightForm";
import { Card } from "@/components/ui/card";

export default function CreateFlight() {
    return (
        <section className="main-container">
            <Card>
                <CreateFlightForm/>
            </Card>
        </section>
    )
}
