import { isAuthenticated } from "@/helpers";
import prisma from "@/lib/db";
import { ReviewSchema } from "@/lib/validations";
import {unstable_noStore as noStore} from 'next/cache'

export async function POST(req: Request) {
    noStore();

    if (!await isAuthenticated()) {
        return Response.redirect('/sign-in');
    }

    const formData = await req.json();

    const validateFields = ReviewSchema.safeParse({
        userId: formData.userId,
        flightId: formData.flightId,
        counterServiceRating: Number(formData.counterServiceRating),
        waitingTimeRating: Number(formData.waitingTimeRating),
        boardingOrganizationRating: Number(formData.boardingOrganizationRating),
        onTimeDepartureRating: Number(formData.onTimeDepartureRating),
        cleanlinessRating: Number(formData.cleanlinessRating),
        crewServiceRating: Number(formData.crewServiceRating),
        foodQualityRating: Number(formData.foodQualityRating),
        entertainmentRating: Number(formData.entertainmentRating),
        captainPerformanceRating: Number(formData.captainPerformanceRating),
        takeoffLandingRating: Number(formData.takeoffLandingRating),
        comfortRating: Number(formData.comfortRating),
        onTimeArrivalRating: Number(formData.onTimeArrivalRating),
        comments: formData.comments ?? "",
    });


    if (!validateFields.success) {
        const errors = validateFields.error.flatten().fieldErrors;
        console.log(errors);
        return Response.json({ status: "error", errors, message: "Oops, I think there is a mistake with your inputs." }, { status: 400 });
    }

    const { userId, flightId } = validateFields.data;
    const existingReview = await prisma.flightReview.findFirst({
        where: {
            userId,
            flightId,
        },
    });

    if (existingReview) {
        return Response.json({ status: "error", message: "You have already submitted a review for this flight." });
    }

    const totalRating = (
        (
            validateFields.data.counterServiceRating +
            validateFields.data.waitingTimeRating +
            validateFields.data.boardingOrganizationRating +
            validateFields.data.onTimeDepartureRating +
            validateFields.data.cleanlinessRating +
            validateFields.data.crewServiceRating +
            validateFields.data.foodQualityRating +
            validateFields.data.entertainmentRating +
            validateFields.data.captainPerformanceRating +
            validateFields.data.takeoffLandingRating +
            validateFields.data.comfortRating +
            validateFields.data.onTimeArrivalRating
        ) / 65
    ) * 5;

    await prisma.flightReview.create({
        data: {
            ...validateFields.data,
            totalRating,
        },
    });

    const allReviews = await prisma.flightReview.findMany({
        where: {
            flightId,
        },
        select: {
            totalRating: true,
        },
    });

    const overallRating = allReviews.reduce((sum, review) => sum + (review.totalRating as number), 0) / allReviews.length;

    await prisma.flight.update({
        where: {
            id: flightId,
        },
        data: {
            averageRating: overallRating,
        }
    });

    return Response.json({ status: "success", message: "Your Review has been created successfully!" }, { status: 201 });

}