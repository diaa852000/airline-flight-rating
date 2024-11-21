/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { isAuthenticated } from "@/helpers";
import prisma from "@/lib/db";
import { FlightSchema } from "@/lib/validations";
import { State } from "@/types";
import { redirect } from "next/navigation";
import {unstable_noStore as noStore} from 'next/cache'


export async function CreateFlightAction(prevState: any, formData: FormData) {
    noStore();
    
    if (!await isAuthenticated()) {
        redirect('/sign-in');
    }

    let state: State;

    const validateFields = FlightSchema.safeParse({
        name: formData.get("name"),
        flightNumber: formData.get("flightNumber"),
        fromCountry: formData.get("fromCountry"),
        toCountry: formData.get("toCountry"),
        startTime: formData.get("startTime"),
        endTime: formData.get("endTime"),
        smallDescription: formData.get("smallDescription"),
        description: formData.get("description"),
        price: Number(formData.get("price")),
    })

    if (!validateFields.success) {
        state = {
            status: "error",
            errors: validateFields.error.flatten().fieldErrors,
            message: `Oops, I think there is a mistake with your inputs.`,
        };
        console.error(state.errors)
        return state;
    }

    const startTime = new Date(validateFields.data.startTime);
    const endTime = new Date(validateFields.data.endTime);

    await prisma.flight.create({
        data: {
            name: validateFields.data.name,
            flightNumber: validateFields.data.flightNumber,
            fromCountry: validateFields.data.fromCountry,
            toCountry: validateFields.data.toCountry,
            startTime,
            endTime,
            smallDescription: validateFields.data.smallDescription,
            description: validateFields.data.description,
            price: validateFields.data.price,
        },
    });

    state = {
        status: "success",
        message: "Flight has been created successfully!",
    }
    return state;
}
