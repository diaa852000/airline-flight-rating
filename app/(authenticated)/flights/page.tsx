/* eslint-disable @typescript-eslint/no-explicit-any */
import FlightCard from "@/components/FlightCard";
import Pagination from "@/components/Pagination";
import { FLIGHT_PER_PAGE } from "@/constants";
import {unstable_noStore as noStore} from 'next/cache'

async function getFlightsPagination(page: number = 1) {
    const response = await fetch(`http://localhost:3333/api/flights?page=${page}`, {
        cache: 'no-cache'
    });

    if (!response.ok) {
        throw new Error("Failed fetch Flights!");
    }

    const data = await response.json();

    return data;
}


export default async function FlightsPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    noStore();

    const page = Number(searchParams['page']) || 1;

    const data = await getFlightsPagination(page);

    const hasPrev = FLIGHT_PER_PAGE * (Number(page) - 1) > 0;
    const hasNext = FLIGHT_PER_PAGE * (Number(page) - 1) + FLIGHT_PER_PAGE < parseInt(data.count);

    return (
        <section className="main-container">
            <h1 className="my-4 text-2xl font-bold tracking-wider">Here find all flights</h1>
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-2 ">
                    {data.flights?.map((flight: any) => (
                        <FlightCard key={flight.id}
                            data={{
                                ...flight,
                                flightRate: flight.flightRate as number,
                                averageRating: flight.averageRating as number,
                            }}
                        />
                    ))}
                </div>
                <div className="mt-4">
                    <Pagination
                        page={page}
                        hasNext={hasNext}
                        hasPrev={hasPrev}
                    />
                </div>
            </div>
        </section>
    )
}
