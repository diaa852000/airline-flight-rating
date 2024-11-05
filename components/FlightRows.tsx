/* eslint-disable @typescript-eslint/no-explicit-any */
import { DateFormatter, getReviewModelData, priceFormatter } from "@/helpers";
import DOMPurify from "isomorphic-dompurify";
import moment from "moment";
import ReviewModel from "./ReviewModel";
import { redirect } from "next/navigation";

export default async function FlightRows({ data }: { data: any }) {
    const cleanDescription = data?.description.replace(/^"|"$/g, '') as string;

    const { user, flightData} = await getReviewModelData(data.id);

    if(!user) {
        redirect('/sign-in')
    }

    return (
        <div className="my-6">
            <div className="flex justify-between">
                <div className="max-w-3xl w-full">
                    <h1 className="text-2xl font-extrabold">{data.name}</h1>
                    <h1 className="text-base font-medium text-muted-foreground mt-1">{data.smallDescription}</h1>
                </div>
                <div>
                    <ReviewModel 
                        flightId={flightData.id}
                        flightNumber={flightData.flightNumber}
                        userId={user.id}
                        userName={user.firstName as string}
                    />
                </div>
            </div>

            <div className="border-t my-4" />
            <div className="grid grid-cols-1 gap-6">
                <div className="flight-rows col-span-1 border-b py-6 flex flex-col">
                    <div className="flex justify-between items-center py-6 px-2">
                        <h2 className="text-lg font-semibold dark:text-gray-200">Flight Number</h2>
                        <h2 className="text-muted-foreground font-bold">{data.flightNumber}</h2>
                    </div>
                    <div className="flex justify-between items-center py-6 px-2">
                        <h2 className="text-lg font-semibold dark:text-gray-200">Price</h2>
                        <h2 className="text-muted-foreground font-bold">{priceFormatter(data.price).slice(0, -3)}</h2>
                    </div>
                    <div className="flex justify-between items-center py-6 px-2">
                        <h2 className="text-lg font-semibold dark:text-gray-200">From Countery</h2>
                        <h2 className="capitalize text-muted-foreground font-bold">{data.fromCountry}</h2>
                    </div>
                    <div className="flex justify-between items-center py-6 px-2">
                        <h2 className="text-lg font-semibold dark:text-gray-200">To Country</h2>
                        <h2 className="capitalize text-muted-foreground font-bold">{data.toCountry}</h2>
                    </div>
                    <div className="flex justify-between items-center py-6 px-2">
                        <h2 className="text-lg font-semibold dark:text-gray-200">Departure</h2>
                        <h2 className="text-muted-foreground font-bold">{DateFormatter(moment(data.startTime).toISOString().slice(0, 10))}</h2>
                    </div>
                    <div className="flex justify-between items-center py-6 px-2">
                        <h2 className="text-lg font-semibold dark:text-gray-200">Land</h2>
                        <h2 className="text-muted-foreground font-bold">{DateFormatter(moment(data.endTime).toISOString().slice(0, 10))}</h2>
                    </div>
                </div>
                <div className="col-span-1">
                    <h2 className="capitalize text-lg font-semibold mb-4">description</h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(cleanDescription)
                        }}
                        className="text-muted-foreground"
                    />
                </div>
            </div>
        </div>
    )
}
