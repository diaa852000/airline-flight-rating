/* eslint-disable @typescript-eslint/no-explicit-any */
import { ADMIN_EMAIL } from "@/constants";
import { currentUser } from "@clerk/nextjs/server";
import moment from "moment";
import { redirect } from "next/navigation";
import { GetFlightById } from "./db";


export async function isAuthenticated(): Promise<boolean> {
    const user = await currentUser();
    return user ? true : false
}

export async function checkAdmin() {
    let isAdmin = false;

    if(!await isAuthenticated()) return;

    const user = await currentUser();
    isAdmin = user?.emailAddresses[0].emailAddress === ADMIN_EMAIL ? true : false;
    return isAdmin
}

export function priceFormatter(price: number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
}

export function DateFormatter(date: any) {
    const momentDate = moment(date);
    return momentDate.format("MMM DD, YYYY");
}

export async function getReviewModelData(flightId: string) {
    const user = await currentUser();
    if(!user) {
        redirect('/sign-in');
    }

    const flightData = await GetFlightById(flightId);
    if(!flightData) {
        throw new Error("No Data for this Flight!")
    }

    return {user, flightData};
}