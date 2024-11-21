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
            averageRating: true,
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

export async function exisitingReview(userId: string, flightId: string) {
    const isReviewed  = await prisma.flightReview.findUnique({
        where: {
            userId_flightId: {
                userId: userId,
                flightId: flightId,
            },
        },
    });

    return isReviewed ? true : false;
}

export async function getUserReviews(userId: string) {
    const data = await prisma.flightReview.findMany({
        where: {
            userId,
        }
    });

    return data;
}

export async function getUserReviewsFlight(userId: string) {
    const userReviewedFlights = await prisma.flight.findMany({
        where: {
            reviews: {
                some: {
                    userId: userId,
                },
            },
        },
        include: {
            reviews: {
                where: {
                    userId: userId,
                }
            }
        }
    });

    return userReviewedFlights;
}


export async function getNewestReviewsForUser(userId: string) {
    try {
        const latestReviews = await prisma.flightReview.findMany({
            where: {
                userId: userId,
            },
            orderBy: {
                reviewDate: 'desc',
            },
            take: 4,
            include: {
                flight: true, 
                user: true,   
            },
        });

        return latestReviews;
    } catch (error) {
        console.error("Error retrieving latest reviews for user:", error);
        throw error;
    }
}
