export interface IAuthForm {
    email: string;
    password: string;
}
export interface IUser {
    id: string;
    createdAt: string;
    updatedAt: string;
    email: string;
    name: string;
}
export interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

export type TypeUserForm = Omit<IUser, 'id'> & {password?: string}