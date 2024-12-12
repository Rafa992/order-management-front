import { selectFilterDate, selectFilterName, selectFilterStatus, selectRadio } from '@/redux/slices/filterSlice';
import { selectAllOrders, setFilteredOrders } from '@/redux/slices/orderSlice'
import { useAppDispatch, useAppSelector } from '@/redux/store'

export default function useFilterOrders() {
 
  const dispatch = useAppDispatch();
  
  const allOrders = useAppSelector(selectAllOrders);
  const valueRadio = useAppSelector(selectRadio);
  const filterName = useAppSelector(selectFilterName);
  const filterDate = useAppSelector(selectFilterDate);
  const filterStatus = useAppSelector(selectFilterStatus);

  const filterOrders = () => {
    let result = [...allOrders];
  
    // Фильтрация по имени
    if (valueRadio === "Фильтрация по имени" && filterName.trim()) {
      result = result.filter(order =>
        order.username.toLowerCase().includes(filterName.toLowerCase().trim())
      );
    } else if (valueRadio === "Фильтрация по номеру" && filterName.trim()) {
      result = result.filter(order =>
        order.orderNumber.toLowerCase().includes(filterName.toLowerCase().trim())
      );
    }
  
    // Фильтрация по диапазону дат
    if (filterDate.startDate || filterDate.endDate) {
      result = result.filter(order => {
        const orderDate = new Date(order.createdAt);
        const startDate = filterDate.startDate ? new Date(filterDate.startDate) : null;
        const endDate = filterDate.endDate ? new Date(filterDate.endDate) : null;
  
        return (
          (!startDate || orderDate >= startDate) &&
          (!endDate || orderDate <= endDate)
        );
      });
    }
  
    // Фильтрация по статусу
    if (filterStatus) {
      result = result.filter(order => order.status === filterStatus);
    }
  
    dispatch(setFilteredOrders(result));
  };

  return {filterOrders}

}
