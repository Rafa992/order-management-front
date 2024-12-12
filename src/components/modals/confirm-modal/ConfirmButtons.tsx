import { Button } from "@mui/material";
import s from "./ConfirmModal.module.scss";
import { setOpenConfirmModal } from "@/redux/slices/modalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { selectDeleteOrder, setDeleteOrder } from "@/redux/slices/orderSlice";
import { IAllOrders } from "@/types/products.types";
import { useDeleteOrder } from "@/hooks/modal/useDeleteOrder";

const ConfirmButtons = () => {
  const dispatch = useAppDispatch();
  const deleteOrder = useAppSelector(selectDeleteOrder);

  const { fetchDeleteOrder } = useDeleteOrder();

  const handleDeleteOrder = () => {
    fetchDeleteOrder(deleteOrder.id);
    dispatch(setOpenConfirmModal(false));
    dispatch(setDeleteOrder({} as IAllOrders));
  };

  return (
    <div className={s.confirmModal_buttons}>
      <Button
        variant="contained"
        color="error"
        onClick={() => dispatch(setOpenConfirmModal(false))}
      >
        Отмена
      </Button>
      <Button variant="contained" color="success" onClick={handleDeleteOrder}>
        Подтвердить
      </Button>
    </div>
  );
};

export default ConfirmButtons;
