import prisma from "@/lib/db";

export async function fetchAllFlights() {
    const data = await prisma.flight.findMany({
        select: {
            id: true,
            name: true,
            startTime: true,
            endTime: true,
            flightNumber: true,
            smallDescription: true,
            toCountry: true,
            fromCountry: true,
            flightRate: true,
            price: true,
        },
    });

    return data;
}

export async function GetFlightById(id: string) {
    const data = await prisma.flight.findUnique({
        where: { 
            id: id
        },
    });

    return data;
};




