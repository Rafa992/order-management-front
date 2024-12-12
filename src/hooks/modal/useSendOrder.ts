import { axiosWithAuth } from '@/api/interceptors';
import { ITemporaryOrder } from '@/types/products.types';
import { AxiosError } from 'axios';
import useInitialError from '../error/useInitialError';
import useGetAllOrders from '../table/useGetAllOrders';

export default function useSendOrder() {

    const {initialError} = useInitialError();
    const {getAllOrders} = useGetAllOrders();

    const sendOrder = async(order: ITemporaryOrder) => {
        try {
            await axiosWithAuth.post("/products/create-order", order);
            initialError(true, 'Заказ успешно добавлен!', 'success');
            getAllOrders();
        } catch (error) {
            if (error instanceof AxiosError) {
                initialError(true, `Ошибка: ${error.response?.data?.message || error.message}`, 'error');
              } else if (error instanceof Error) {
                initialError(true, `Ошибка: ${error.message}`, 'error');
              } else {
                initialError(true, 'Неизвестная ошибка', 'error');
              }
        }
    }

    return {sendOrder}
}
