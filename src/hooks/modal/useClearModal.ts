"use client";
import { useAppDispatch } from "@/redux/store";
import {
  setCheckedProducts,
  setTemporaryProducts,
} from "@/redux/slices/productsSlice";
import useOpenList from "./useOpenList";
import { setAddressOrder, setCheckedPaymentMethod, setCommentOrder, setEditOrder } from "@/redux/slices/orderSlice";
import { IEditOrder } from "@/types/products.types";

export default function useClearModal() {
  const dispatch = useAppDispatch();
  const { handleDrawerClose } = useOpenList();

  const clearModal = () => {
    dispatch(setAddressOrder(""));
    dispatch(setCommentOrder(""));
    dispatch(setCheckedProducts([]));
    dispatch(setTemporaryProducts([]));
    dispatch(setCheckedPaymentMethod(""));
    dispatch(setEditOrder({} as IEditOrder));
    handleDrawerClose();
  };

  return {
    clearModal,
  };
}
