import FlightRows from "@/components/FlightRows";
import { GetFlightById } from "@/helpers/db";

export default async function page({ params }: { params: { id: string } }) {
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
