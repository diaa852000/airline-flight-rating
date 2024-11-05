import { GetFlightById } from "@/actions/flights.actions"
import FlightRows from "@/components/FlightRows";
import ReviewButton from "@/components/ReviewButton";

export default async function page({ params }: { params: { id: string } }) {
    const data = await GetFlightById(params.id);

    return (
        <section className="main-container">
            {!data ? (
                <h1>Oops! There&apos;s no Data for this Flight </h1>
            ) : (
                <>
                    <FlightRows data={data}/>
                    <div className="flex justify-end">
                        <ReviewButton id={data.id}/>
                    </div>
                </>
            )}
        </section>
    )
}
