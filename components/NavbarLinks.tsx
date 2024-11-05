"use client";

import { adminNavlinks, navlinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function NavbarLinks({isAdmin}: {isAdmin: boolean}) {
    const location = usePathname();
    return (
        <div className="hidden md:flex justify-center items-center col-span-7 gap-x-2">
            <>
                {isAdmin ? (
                    adminNavlinks.map((item) => (
                        <Link
                            href={item.href}
                            key={item.id}
                            className={cn(
                                location === item.href ? 'border-b-2 border-primary/85 text-primary/85' : 'hover:text-primary/80',
                                "group flex items-center py-1 px-2 mx-1 font-semibold transition-colors capitalize"
                            )}>
                            {item.name}
                        </Link>
                    ))
                ) : (
                    navlinks.map((item) => (
                        <Link
                            href={item.href}
                            key={item.id}
                            className={cn(
                                location === item.href ? 'border-b-2 border-primary/85 text-primary/85' : 'hover:text-primary/80',
                                "group flex items-center py-1 px-2 mx-1 font-semibold transition-colors capitalize"
                            )}>
                            {item.name}
                        </Link>
                    ))
                )}
            </>
        </div>
    )
}


