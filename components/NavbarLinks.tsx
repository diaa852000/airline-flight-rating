"use client";

import { navlinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavbarLinks() {
    const location = usePathname();

    return (
        <div className="hidden md:flex justify-start items-center col-span-7 gap-x-2">
            {navlinks.map((item) => (
                <Link
                    href={item.href}
                    key={item.id}
                    className={cn(
                        location === item.href ? 'border-b-2 border-primary/85 text-primary/85' : 'hover:text-primary/80',
                        "group flex items-center p-2 font-semibold transition-colors"
                    )}>
                    {item.name}
                </Link>
            ))}
        </div>
    )
}
