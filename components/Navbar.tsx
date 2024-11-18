import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Logo from "./Logo";
import { Button } from "./ui/button";
import NavbarLinks from "./NavbarLinks";
import ThemeToggleButton from "./ThemeToggleButton";
import { checkAdmin, isAuthenticated } from "@/helpers";
import {unstable_noStore as noStore} from 'next/cache'

export default async function Navbar() {
    noStore();

    const isAdmin = await checkAdmin();
    const isAuth = await isAuthenticated();

    return (
        <nav className="main-container w-full flex md:grid md:grid-cols-12 items-center pt-7 pb-4">
            <div className="md:col-span-2">
                <Logo />
            </div>

            <NavbarLinks isAdmin={isAdmin as boolean} isAuthenticated={isAuth as boolean}/>

            <div className="flex items-center gap-x-3 ms-auto md:col-span-3">
                <SignedOut>
                    <Button
                        asChild
                        variant={"outline"}
                        className="font-medium py-2 px-4 rounded-md"
                    >
                        <SignInButton>
                            Sing in
                        </SignInButton>
                    </Button>
                    <Button
                        asChild
                        className="font-medium py-2 px-4 rounded-md"
                    >
                        <SignUpButton>
                            Sign up
                        </SignUpButton>
                    </Button>
                </SignedOut>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
                <ThemeToggleButton/>
            </div>
        </nav>
    )
}
