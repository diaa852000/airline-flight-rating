export interface IUserCredentails {
    username?: string;
    email?: string;
    password?: string;
}

export type State = {
    status: "error" | "success" | "undefined";
    errors?: {
        [key: string]: string[]
    };
    message?: string | null;
}