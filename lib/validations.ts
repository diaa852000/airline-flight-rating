import { z } from 'zod';

export const FlightSchema = z.object({
    name: z.string().min(4, { message: "Flight's Name is required and can't be less than 4 character" }),
    description: z.string().min(10, { message: "Description is required and can't be less than 10 character" }),
    smallDescription: z.string().min(10, { message: "Small description is required and can't be less than 10 character" }),
    fromCountry: z.string().min(1, { message: "From Country is Required" }),
    toCountry: z.string().min(1, { message: "Destination Country is Required" }),
    startTime: z.string().min(1, { message: "Start Time is required" }),
    endTime: z.string().min(1, { message: "End Time is Required" }),
    flightNumber: z.string().min(1, { message: "Flight Number is required" }),
    price: z.number().min(1, { message: "Price is required" })
});


export const ReviewSchema = z.object({
    userId: z.string(),

    flightId: z.string(),

    counterServiceRating: z.number()
        .min(0, { message: 'This field is required' })
        .max(5, { message: "Rating must be at most 5" }),

    waitingTimeRating: z.number()
        .min(0, { message: 'This field is required' })
        .max(5, { message: "Rating must be at most 5" }),

    boardingOrganizationRating: z.number()
        .min(0, { message: 'This field is required' })
        .max(5, { message: "Rating must be at most 5" }),

    onTimeDepartureRating: z.number()
        .min(0, { message: 'This field is required' })
        .max(5, { message: "Rating must be at most 5" }),

    cleanlinessRating: z.number()
        .min(0, { message: 'This field is required' })
        .max(5, { message: "Rating must be at most 5" }),

    crewServiceRating: z.number()
        .min(0, { message: 'This field is required' })
        .max(5, { message: "Rating must be at most 5" }),

    foodQualityRating: z.number()
        .min(0, { message: 'This field is required' })
        .max(5, { message: "Rating must be at most 5" }),

    entertainmentRating: z.number()
        .min(0, { message: 'This field is required' })
        .max(5, { message: "Rating must be at most 5" }),

    captainPerformanceRating: z.number()
        .min(0, { message: 'This field is required' })
        .max(5, { message: "Rating must be at most 5" }),

    takeoffLandingRating: z.number()
        .min(0, { message: 'This field is required' })
        .max(5, { message: "Rating must be at most 5" }),

    comfortRating: z.number()
        .min(0, { message: 'This field is required' })
        .max(5, { message: "Rating must be at most 5" }),

    onTimeArrivalRating: z.number()
        .min(0, { message: 'This field is required' })
        .max(5, { message: "Rating must be at most 5" }),

    comments: z.string()
        .optional(),
});