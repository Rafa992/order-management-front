"use client";
import Modal from "@mui/material/Modal";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Box } from "@mui/material";
import { selectOpenConfirmModal } from "@/redux/slices/modalSlice";
import s from "./ConfirmModal.module.scss";
import ConfirmButtons from "./ConfirmButtons";
import useOpenConfirmModal from "@/hooks/modal/useOpenConfirmModal";
import { useEffect } from "react";
import useGetAllOrders from "@/hooks/table/useGetAllOrders";
import { selectDeleteOrder } from "@/redux/slices/orderSlice";

export default function ConfirmModal() {
  
  const dispatch = useAppDispatch();
  const openModal = useAppSelector(selectOpenConfirmModal);
  const deleteOrder = useAppSelector(selectDeleteOrder);
  const {handleClose} = useOpenConfirmModal();
  const {getAllOrders} = useGetAllOrders();

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{padding: '15px'}}
    >
      <Box className={s.confirmModal}>
        <h2>Вы действительно хотите удалить этот заказ?</h2>
        <h3>{deleteOrder.orderNumber}</h3>

        <ConfirmButtons />
      </Box>
    </Modal>
  );
}
