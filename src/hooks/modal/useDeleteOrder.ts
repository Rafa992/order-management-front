import { axiosWithAuth } from '@/api/interceptors';
import useInitialError from '@/hooks/error/useInitialError';
import { AxiosError } from 'axios';
import useGetAllOrders from '../table/useGetAllOrders';

export const useDeleteOrder = () => {

    const {initialError} = useInitialError();
    const {getAllOrders} = useGetAllOrders();

    const fetchDeleteOrder = async (id:string) => {
      try {
          await axiosWithAuth.delete(`/products/delete-order/${id}`);
          getAllOrders();
          initialError(true, 'Заказ успешно удален!', 'success');
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

    return {fetchDeleteOrder}
}
