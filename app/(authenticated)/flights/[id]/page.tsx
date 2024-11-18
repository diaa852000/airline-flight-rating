import FlightRows from "@/components/FlightRows";
import { GetFlightById } from "@/helpers/db";
import {unstable_noStore as noStore} from 'next/cache'

export default async function page({ params }: { params: { id: string } }) {
    noStore();
    const data = await GetFlightById(params.id);

    return (
        <section className="main-container">
            {!data ? (
                <h1>Oops! There&apos;s no Data for this Flight </h1>
            ) : (
                <>
                    <FlightRows data={data}/>
                </>
            )}
        </section>
    )
}
