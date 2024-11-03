import prisma from "./db";



export async function FindTrips(tripNumber: string) {
    const data = await prisma.flight.findMany({
        where: {
            flightNumber: {
                contains: tripNumber,
                mode: 'insensitive'
            }
        }
    });

    return data;
}