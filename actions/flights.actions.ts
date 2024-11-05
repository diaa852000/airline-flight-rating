/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { isAuthenticated } from "@/helpers";
import prisma from "@/lib/db";
import { FlightSchema } from "@/lib/validations";
import { State } from "@/types";
import moment from "moment";
import { redirect } from "next/navigation";

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
        price: Number(formData.get("price")),
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

export async function GetFlightById(id: string) {
    const data = await prisma.flight.findUnique({
        where: { 
            id: id
        },
    });

    return data;
}

