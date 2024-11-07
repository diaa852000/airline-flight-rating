/* eslint-disable @typescript-eslint/no-explicit-any */
// interfaces
export interface IUserCredentails {
    username?: string;
    email?: string;
    password?: string;
}

export interface IFlightCardProps {
    id: string;
    name: string;
    startTime: string;
    endTime: string;
    flightNumber: string;
    smallDescription: string;
    toCountry: string;
    fromCountry: string;
    flightRate: number;
    price: number;
    averageRating: number;
}

export interface IReviewFormProps {
    userId: string;
    flightId: string;
}

export interface IReviewModelProps {
    userId: string;
    userName: string;
    flightId: string;
    flightNumber: string;
}

export interface IRateinputProps {
    name: string;
    value: string;
    id: string;
    selectedValue: any;
    onChange: (val: string) => void;
}

export interface IPagination {
    page: number;
    hasPrev: boolean;
    hasNext: boolean;
}


// Types
export type Flight = {
    name: string;
    flightNumber: string;
    fromCountry: string;
    toCountry: string;
    startTime: string;
    endTime: string;
    smallDescription: string;
    description: string;
}


export type State = {
    status: "error" | "success" | "undefined";
    errors?: {
        [key: string]: string[]
    };
    message?: string | null;
}

