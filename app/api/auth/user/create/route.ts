/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import {unstable_noStore as noStore} from 'next/cache'

export async function GET() {
    noStore();
    
    const user = await currentUser();

    if (!user) {
        console.error("No User")
        return NextResponse.json({ error: "No User Authenticated" }, { status: 401 });
    }

    try {
        let dbUser = await prisma.user.findUnique({
            where: {
                id: user.id,
            },
        });

        if (!dbUser) {
            dbUser = await prisma.user.create({
                data: {
                    id: user.id ?? "",
                    firstName: user.firstName ?? "",
                    lastName: user.lastName ?? "",
                    imageUrl: user.imageUrl ?? "",
                    emailAddress: user.emailAddresses[0].emailAddress ?? "",
                    clerkUserId: user.id ?? "",
                }
            });

            return NextResponse.redirect('/home');
        } else {
            return NextResponse.redirect('/home');
        }

    } catch (error: any) {
        console.error("Database error:", error?.message);
        return NextResponse.json({ error: "Database operation failed" }, { status: 500 });
    }
}
