import { Button } from "@mui/material";
import s from "./Modal.module.scss";
import useClearModal from "@/hooks/modal/useClearModal";
import useCreateTemporaryOrder from "@/hooks/modal/useCreateTemporaryOrder";
import { selectEditModal, setOpenModal } from "@/redux/slices/modalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  selectEditOrder,
  selectAddressOrder,
  selectCheckedPaymentMethod,
} from "@/redux/slices/orderSlice";
import useSendOrder from "@/hooks/modal/useSendOrder";
import useUpdateOrder from "@/hooks/modal/useUpdateOrder";
import useGetAllOrders from "@/hooks/table/useGetAllOrders";
import useInitialError from "@/hooks/error/useInitialError";
import useCreateEditOrder from "@/hooks/modal/useCreateEditOrder";

const SaveButtons = () => {
  const dispatch = useAppDispatch();
  const { clearModal } = useClearModal();
  const { sendOrder } = useSendOrder();
  const { updateOrder } = useUpdateOrder();
  const { getAllOrders } = useGetAllOrders();
  const { initialError } = useInitialError();
  const { createEditOrder } = useCreateEditOrder();
  const editModal = useAppSelector(selectEditModal);
  const editOrder = useAppSelector(selectEditOrder);
  const addressOrder = useAppSelector(selectAddressOrder);
  const { createTemporaryOrder } = useCreateTemporaryOrder();
  const checkedPaymentMethod = useAppSelector(selectCheckedPaymentMethod);

  const handleFetchOrder = () => {
    if (!addressOrder) {
      initialError(true, "Введите адрес доставки!", "error");
    } else if (!checkedPaymentMethod) {
      initialError(true, "Выберите метод оплаты!", "error");
    } else {
      sendOrder(createTemporaryOrder);
      dispatch(setOpenModal(false));
      clearModal();
      getAllOrders();
    }
  };

  const handleUpdateOrder = () => {
    updateOrder({
      ...createEditOrder(editOrder.orderNumber),
      id: editOrder.id,
    });
    dispatch(setOpenModal(false));
    clearModal();
    getAllOrders();
  };

  return (
    <div className={s.saveButtons}>
      <Button
        variant="contained"
        color="error"
        onClick={() => dispatch(setOpenModal(false))}
      >
        Отмена
      </Button>
      {!editModal ? (
        <Button variant="contained" color="success" onClick={handleFetchOrder}>
          Сохранить
        </Button>
      ) : (
        <Button variant="contained" color="success" onClick={handleUpdateOrder}>
          Изменить
        </Button>
      )}
    </div>
  );
};

export default SaveButtons;
