"use client";
import { Button, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import Modal from "@/components/modals/adding-modal/Modal";
import ColumnGroupingTable from "../table/TablePagination";
import { getProfile } from "@/services/getProfile.service";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getUser } from "@/redux/slices/userSlice";
import { selectOpenModal, setEditModal } from "@/redux/slices/modalSlice";
import useOpenModal from "../../hooks/modal/useOpenModal";
import s from "./Main.module.scss";
import useClearModal from "../../hooks/modal/useClearModal";
import CustomSnackbar from "../ui/customsComponents/CustomSnackbar";
import {
  selectErrorMessage,
  selectErrorStatus,
  selectSeverity,
  setErrorStatus,
} from "@/redux/slices/errorSlice";
import useGetAllOrders from "@/hooks/table/useGetAllOrders";
import { selectAllOrders } from "@/redux/slices/orderSlice";
import ConfirmModal from "../modals/confirm-modal/ConfirmModal";
import MainFilterBlock from "../filters/MainFilterBlock";
import PaletteModal from "../modals/palette-modal/PaletteModal";
import { selectColor } from "@/redux/slices/colorSlice";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { selectOpenFilters, setOpenFilters } from "@/redux/slices/filterSlice";
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import useClearFilters from "@/hooks/table/useClearFilters";

export default function Main() {
  const dispatch = useAppDispatch();
  const openModal = useAppSelector(selectOpenModal);
  const openFilter = useAppSelector(selectOpenFilters)
  const { handleOpen } = useOpenModal();
  const { clearModal } = useClearModal();

  const errorStatus = useAppSelector(selectErrorStatus);
  const errorMessage = useAppSelector(selectErrorMessage);
  const severity = useAppSelector(selectSeverity);

  const handleCloseSnackbar = () => dispatch(setErrorStatus(false));
  const { getAllOrders } = useGetAllOrders();
  const allOrders = useAppSelector(selectAllOrders);
  const {clearFilters} = useClearFilters();
  const color = useAppSelector(selectColor);

  useEffect(() => {
    document.documentElement.style.setProperty("--baseColor", color);
  }, [color]);

  useEffect(() => {
    const fetchUser = async () => {
      const profile = await getProfile();
      if (profile) {
        dispatch(getUser(profile));
        getAllOrders();
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (openModal === false) {
      clearModal();
      dispatch(setEditModal(false));
    }
  }, [openModal]);

  return (
    <main className={`container ${s.main}`}>
      {allOrders.length > 0 && (
        <div>
          {
            openFilter && (
              <div className={s.main_filterBgClose} onClick={()=> dispatch(setOpenFilters(false))}></div>
            )
          }
          <div className={s.main_filterIcons}>
            <IconButton
              className={s.main_filterIcons_btn}
              onClick={() => dispatch(setOpenFilters(true))}
            >
              <FilterAltIcon sx={{ color: "var(--baseColorText)" }} />
              <span> Фильтры</span>
            </IconButton>
            <IconButton
              className={s.main_filterIcons_btn}
              onClick={clearFilters}
            >
            <FilterAltOffIcon sx={{ color: "var(--baseColorText)" }} />
            <span>Очистить фильтры</span>
          </IconButton>
          </div>
          
          <MainFilterBlock />
        </div>
      )}
      {allOrders.length > 0 && <ColumnGroupingTable />}
      <Button
        className={s.main_button}
        type="button"
        variant="contained"
        onClick={handleOpen}
      >
        Добавить заказ
      </Button>
      <Modal />
      <ConfirmModal />
      <PaletteModal />
      <CustomSnackbar
        message={errorMessage}
        severity={severity}
        open={errorStatus}
        onClose={handleCloseSnackbar}
        autoHideDuration={3000}
        position={{ vertical: "bottom", horizontal: "right" }}
      />
    </main>
  );
}
