import { IAllOrders } from '@/types/products.types';

export default function useCreateDate(order:IAllOrders) {

    const timezone = Number(Math.abs(new Date().getTimezoneOffset() / 60));
    const hoursCreated = Number(order.createdAt.split("T")[1].split(".")[0].split(":")[0]) + timezone;
    const minutesCreated = order.createdAt.split("T")[1].split(".")[0].split(":")[1];
    const hoursUpdate = Number(order.updatedAt.split("T")[1].split(".")[0].split(":")[0]) + timezone;
    const minutesUpdate = order.updatedAt.split("T")[1].split(".")[0].split(":")[1];

    return {
        timezone,
        hoursCreated,
        minutesCreated,
        hoursUpdate,
        minutesUpdate,
    }
}
