/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { isAuthenticated } from "@/helpers";
import prisma from "@/lib/db";
import { FindTrips } from "@/lib/helpers";
import { FlightSchema } from "@/lib/validations";
import { State } from "@/types";
import moment from "moment";
import { redirect } from "next/navigation";

export async function TripSearchAction(searchParams: any) {
    let state: State;

    const trips = await FindTrips(searchParams);

    if(!trips) {
        state = {
            status: "error",
            message: "Oops, Check your trip number or try again!"
        };
        return state;
    }

    state = {
        status: "success",
        message: "Here're matched trips"
    }

    return state;
}   


export async function CreateFlightAction(prevState: any ,formData: FormData) {
    if(!await isAuthenticated()) {
        redirect('/login');
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
    })

    if(!validateFields.success) {
        state = {
            status: "error",
            errors: validateFields.error.flatten().fieldErrors,
            message: `Oops, I think there is a mistake with your inputs.`,
        };
        console.error(state.errors)
        return state;
    }


    await prisma.flight.create({
        data: {
            name: validateFields.data.name,
            flightNumber: validateFields.data.flightNumber,
            fromCountry: validateFields.data.fromCountry,
            toCountry: validateFields.data.toCountry,
            startTime: moment(validateFields.data.startTime).toISOString(),
            endTime: moment(validateFields.data.endTime).toISOString(),
            smallDescription: validateFields.data.smallDescription,
            descripton: validateFields.data.description
        },
    });

    state = {
        status: "success",
        message: "Flight has been created successfully!",
    }
    return state;
}