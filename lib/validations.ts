import {z} from 'zod';

export const FlightSchema = z.object({
    name: z.string().min(4, {message: "Flight's Name is required and can't be less than 4 character"}),
    description: z.string().min(10, {message: "Description is required and can't be less than 10 character"}),
    smallDescription: z.string().min(10, {message: "Small description is required and can't be less than 10 character"}),
    fromCountry: z.string().min(1, {message: "From Country is Required"}),
    toCountry: z.string().min(1, {message: "Destination Country is Required"}),
    startTime: z.string().min(1,{message: "Start Time is required"}),
    endTime: z.string().min(1, {message: "End Time is Required"}),
    flightNumber: z.string().min(1, {message: "Flight Number is required"}),
    price: z.number().min(1, {message: "Price is required"})
});