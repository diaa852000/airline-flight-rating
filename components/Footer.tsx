import Image from "next/image";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { footerLinks } from "@/constants";
import React from "react";
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="pt-12 pb-4 padding-x text-sm main-container border-t">
            {/* TOP */}
            <div className="flex flex-col md:flex-row  justify-between gap-24 text-muted-foreground">
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4">
                    <Link href='/'>
                        <h1 className="text-2xl font-semibold">MART-<span className="text-primary">UI</span></h1>
                    </Link>
                    <p className="text-pretty text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam praesentium repudiandae labore dolorum nobis impedit officiis doloribus accusantium expedita sint
                    </p>
                    <div className="flex gap-6">
                        <FaFacebook className="w-5 h-5" />
                        <FaXTwitter className="w-5 h-5" />
                        <FaInstagram className="w-5 h-5" />
                        <FaYoutube className="w-5 h-5" />
                    </div>
                </div>
                <div className="hidden lg:flex justify-between w-1/2">
                    {footerLinks.map(item => (
                        <div className="flex flex-col justify-between" key={item.id}>
                            <h1 className="font-semibold text-lg uppercase">{item.title}</h1>
                            <div className="flex flex-col gap-6 capitalize">
                                {item.links.map((link, idx) => (
                                    <Link key={idx} href={'#'} className="capitalize">{link.label}</Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6">
                    <h1 className="font-medium uppercase text-lg">subscribe</h1>
                    <p className="font-semibold">Be the first to get the latest news about trends, promotions, and much more!</p>
                    <div className="flex">
                        <input type="email" placeholder="Email address" className="p-4 w-3/4 rounded-s-sm border border-e-0 dark:bg-gray-50" />
                        <button className="w-1/4 bg-primary text-white rounded-e-sm">JOIN</button>
                    </div>
                    <p className="capitalize font-semibold">secure payments</p>
                    <div className="flex justify-between flex-wrap sm:gap-4">
                        <Image src={'/discover.png'} alt="" width={40} height={40} />
                        <Image src={'/skrill.png'} alt="" width={40} height={40} />
                        <Image src={'/paypal.png'} alt="" width={40} height={40} />
                        <Image src={'/mastercard.png'} alt="" width={40} height={40} />
                        <Image src={'/visa.png'} alt="" width={40} height={40} />
                    </div>
                </div>
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16">
                <span className="text-base text-gray-700 font-medium">&copy; {new Date().getFullYear()} Online shop</span>
                <div className="capitalize text-base text-gray-700">online | Egypt</div>
            </div>
        </footer>
    )
}
