import { State } from "@/types";

export const unAuthNavlinks = [
    {
        id: 0,
        name: 'Home',
        href: '/home'
    },
    {
        id: 1,
        name: 'Flights',
        href: '/flights'
    }
];
export const navlinks = [
    {
        id: 0,
        name: 'Home',
        href: '/home'
    },
    {
        id: 1,
        name: 'Flights',
        href: '/flights'
    },
    {
        id: 2,
        name: 'Reviews',
        href: '/reviews'
    },
];

export const adminNavlinks = [
    {
        id: 0,
        name: 'Home',
        href: '/home'
    },
    {
        id: 1,
        name: 'Flights',
        href: '/flights'
    },
    {
        id: 2,
        name: 'Create Flight',
        href: '/flights/create'
    },
    {
        id: 2,
        name: 'Reviews',
        href: '/reviews'
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

export const rateInputArray = ['0', '1', '2', '3', '4', '5']

export const ADMIN_EMAIL = "diaaeltaiby@gmail.com"

export const FormSteps = [1, 2];

export const FLIGHT_PER_PAGE = 5;

