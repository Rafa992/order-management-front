import { axiosWithAuth } from "@/api/interceptors"
import { IUser } from "@/types/auth.types"

export const getProfile = async ():Promise<IUser | null> => {
    try {
        const res = await axiosWithAuth.get('/user/profile')
        const user = await res.data.user
        return user
    } catch (error) {
        console.log(error);
        return null
    }
}