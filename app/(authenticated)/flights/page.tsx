import FlightCard from "@/components/FlightCard";
import { fetchAllFlights } from "@/helpers/db"

export default async function FlightsPage() {
    const flights = await fetchAllFlights();

    return (
        <section className="main-container">
            <h1 className="my-4 text-2xl font-bold">Here find all flights</h1>
            <div className="flex flex-col gap-2">
                {flights.map(flight => (
                    <FlightCard key={flight.id}
                        data={{
                            ...flight,
                            startTime: flight.startTime.toISOString(),
                            endTime: flight.endTime.toISOString(),
                            flightRate: flight.flightRate as number,
                        }}
                    />
                ))}
            </div>
        </section>
    )
}
