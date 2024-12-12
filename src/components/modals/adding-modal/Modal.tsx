"use client";
import React, { useEffect, useCallback, useState } from "react";
import Modal from "@mui/material/Modal";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getAllProducts } from "@/services/getAllProducts.service";
import { selectTemporaryProducts, setAllProducts } from "@/redux/slices/productsSlice";
import MainModal from "./MainModal";
import {
  Box,
  CssBaseline,
} from "@mui/material";
import useOpenModal from "@/hooks/modal/useOpenModal";
import { selectOpenModal } from "@/redux/slices/modalSlice";
import s from './Modal.module.scss'
import SaveButtons from "./SaveButtons";

export default function BasicModal() {

  const dispatch = useAppDispatch();
  const openModal = useAppSelector(selectOpenModal)
  const {handleClose} = useOpenModal();
  const temporaryProducts = useAppSelector(selectTemporaryProducts)

  const fetchProducts = useCallback(async () => {
    const products = await getAllProducts();
    if (products) {
      dispatch(setAllProducts(products));
    }
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={s.modal}>
      <CssBaseline /> 
        <MainModal />
        {
          temporaryProducts.length > 0 && <SaveButtons />
        }
      </Box>
    </Modal>
  );
}
