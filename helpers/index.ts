import { currentUser } from "@clerk/nextjs/server";


export async function isAuthenticated(): Promise<boolean> {
    const user = await currentUser();
    return user ? true : false
}