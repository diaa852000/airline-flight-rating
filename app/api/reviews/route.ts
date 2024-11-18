/* eslint-disable @typescript-eslint/no-explicit-any */
import { FLIGHT_PER_PAGE } from "@/constants";
import prisma from "@/lib/db";
import {unstable_noStore as noStore} from 'next/cache'


export async function GET(req: Request) {
    noStore();
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");

    const pageNumber = Number(page);


    try {
        const flights = await prisma.flight.findMany({
            take: FLIGHT_PER_PAGE,
            skip: FLIGHT_PER_PAGE * (pageNumber - 1),
        })

        const count = await prisma.flight.count();

        return new Response(
            JSON.stringify({flights, count, FLIGHT_PER_PAGE}), {status: 200,}
        );

    } catch (error: any) {
        console.log(error.message);
        return Response.json({status: "error", message: "There's an error while fetching data"}, {status: 500});
    }
}