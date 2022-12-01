export enum MethodType {
    POST = 'POST',
    PUT = 'PUT',
    GET = 'GET',
    DELETE = 'DELETE'
}

export type DetailsType =  {
    id: number;
    name: string;
}

export type PetInputType = {
    id?: string;
    category?: DetailsType;
    name?: string;
    photoUrls?: string[];
    tags?: DetailsType[];
    status: string;
}

export type OrderInputType = {
    id?: number;
    petId?: number;
    quantity?: number;
    status?: string;
    complete?: boolean;
}

export type UserInputType = {
    id?: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    phone?: string;
    userStatus?: number;
}

export type UserLoginType = {
    username: string;
    password: string;
}