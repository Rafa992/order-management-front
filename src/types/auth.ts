export interface Register {
    email: string;
    password: string;
    name?: string;
}

export type Login = Omit<Register, "name">

export interface User extends Omit<Register, 'password'> {
    createdAt: string;
    updatedAt: string;
    id: string;
} 

export interface LoginResponse {
    user: User
    accessToken: string;
    refreshToken: string;
}