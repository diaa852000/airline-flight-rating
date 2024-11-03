import { State } from "@/types";

export const navlinks = [
    {
        id: 0,
        name: 'Home',
        href: '/home'
    },
    {
        id: 1,
        name: 'Trips',
        href: '/trips'
    },
    {
        id: 2,
        name: 'booking',
        href: '/products/uikit'
    },
    {
        id: 3,
        name: 'Icons',
        href: '/products/icon'
    },
];


export const footerLinks = [
    {
        title: "company",
        id: 1,
        links: [
            { label: "about us", url: "about-us", },
            { label: "careers", url: "careers", },
            { label: "affilliates", url: "affilliates", },
            { label: "blog", url: "blog", },
            { label: "contact us", url: "contact-us", },
        ]
    },
    {
        title: "shop",
        id: 2,
        links: [
            { label: "new arrivals", url: "new-arrivals", },
            { label: "accessories", url: "accessories", },
            { label: "men", url: "men", },
            { label: "women", url: "women", },
            { label: "all products", url: "all-products", },
        ]
    },
    {
        title: "help",
        id: 3,
        links: [
            { label: "customer service", url: "customer-service", },
            { label: "my account", url: "my-account", },
            { label: "find a store", url: "find-store", },
            { label: "legal & policy", url: "#", },
            { label: "gift card", url: "gift-card", },
        ]
    },
];

export const initalState: State = {
    message: '',
    status: "undefined"
}