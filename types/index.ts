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

