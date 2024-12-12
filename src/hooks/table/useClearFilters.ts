import { selectAllOrders, setFilteredOrders } from '@/redux/slices/orderSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { setFilterDate, setFilterName, setFilterStatus, setValueRadio } from "@/redux/slices/filterSlice";

export default function useClearFilters() {

    const dispatch = useAppDispatch();
    const allOrders = useAppSelector(selectAllOrders);

    const clearFilters = () => {
        dispatch(setValueRadio('Фильтрация по имени')); 
        dispatch(setFilterStatus('')); 
        dispatch(setFilterName('')); 
        dispatch(setFilterDate({ startDate: '', endDate: '' })); 
        dispatch(setFilteredOrders([...allOrders])); 
      };

  return {clearFilters}
}
