import { axiosWithAuth } from "@/api/interceptors";

export const getAllProducts = async()=> {
    try {
        const res = await axiosWithAuth.get('/products/all')
        return await res.data
    } catch (error) {
        console.log(error);
    }
}