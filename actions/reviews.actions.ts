/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { isAuthenticated } from "@/helpers";
import prisma from "@/lib/db";
import { ReviewSchema } from "@/lib/validations";
import { State } from "@/types";
import { redirect } from "next/navigation";

export async function CreateReviewAction(prevState: any, formData: FormData) {
    if (!await isAuthenticated()) {
        redirect('/sign-in');
    }

    let state: State;

    const validateFields = ReviewSchema.safeParse({
        userId: formData.get("userId"),
        flightId: formData.get("flightId"),
        counterServiceRating: Number(formData.get("counterServiceRating")),
        waitingTimeRating: Number(formData.get("waitingTimeRating")),
        boardingOrganizationRating: Number(formData.get("boardingOrganizationRating")),
        onTimeDepartureRating: Number(formData.get("onTimeDepartureRating")),
        cleanlinessRating: Number(formData.get("cleanlinessRating")),
        crewServiceRating: Number(formData.get("crewServiceRating")),
        foodQualityRating: Number(formData.get("foodQualityRating")),
        entertainmentRating: Number(formData.get("entertainmentRating")),
        captainPerformanceRating: Number(formData.get("captainPerformanceRating")),
        takeoffLandingRating: Number(formData.get("takeoffLandingRating")),
        comfortRating: Number(formData.get("comfortRating")),
        onTimeArrivalRating: Number(formData.get("onTimeArrivalRating")),
        comments: formData.get("comments") as string,
    });

    if (!validateFields.success) {
        state = {
            status: "error",
            errors: validateFields.error.flatten().fieldErrors,
            message: `Oops, I think there is a mistake with your inputs.`,
        };
        console.error(state.errors)
        return state;
    }

    await prisma.flightReview.create({
        data: {
            userId: validateFields.data.userId,
            flightId: validateFields.data.flightId,
            counterServiceRating: validateFields.data.counterServiceRating,
            waitingTimeRating: validateFields.data.waitingTimeRating,
            boardingOrganizationRating: validateFields.data.boardingOrganizationRating,
            onTimeDepartureRating: validateFields.data.onTimeDepartureRating,
            cleanlinessRating: validateFields.data.cleanlinessRating,
            crewServiceRating: validateFields.data.crewServiceRating,
            foodQualityRating: validateFields.data.foodQualityRating,
            entertainmentRating: validateFields.data.entertainmentRating,
            captainPerformanceRating: validateFields.data.captainPerformanceRating,
            takeoffLandingRating: validateFields.data.takeoffLandingRating,
            comfortRating: validateFields.data.comfortRating,
            onTimeArrivalRating: validateFields.data.onTimeArrivalRating,
            comments: validateFields.data.comments,
        },
    });

    state = {
        status: "success",
        message: "Your Review has been created successfully!",
    }
    return state;
}