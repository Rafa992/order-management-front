"use client";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import TableCell from "@mui/material/TableCell";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { selectUser } from "@/redux/slices/userSlice";
import { IAllOrders } from "@/types/products.types";
import { setEditModal, setOpenConfirmModal, setOpenModal } from "@/redux/slices/modalSlice";
import {
  setCheckedProducts,
  setTemporaryProducts,
} from "@/redux/slices/productsSlice";
import {
  setEditOrder,
  setCommentOrder,
  setAddressOrder,
  setCheckedPaymentMethod,
  setDeleteOrder,
} from "@/redux/slices/orderSlice";
import DateCell from "../columns/DateCell";
import useInitialError from "@/hooks/error/useInitialError";

interface IProps {
  order: IAllOrders;
  open: boolean;
  setOpen: (val: boolean) => void;
}

export default function TopRow({ order, open, setOpen }: IProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const {initialError} = useInitialError();

  const handleEditOrder = () => {
    if(user.id === order.userId){
      dispatch(setOpenModal(true));
      dispatch(setEditModal(true));
      dispatch(setEditOrder(order));
      dispatch(setAddressOrder(order.address));
      dispatch(setCommentOrder(order.comment));
      dispatch(setTemporaryProducts(order.products));
      dispatch(setCheckedPaymentMethod(order.paymentMethod));
      const productsId = order.products.map((product) => product.id);
      dispatch(setCheckedProducts(productsId));
    }
    else {
      initialError(true, 'Вы не можете изменить чужой заказ!', 'warning');
    }
  };

  const handleDeleteOrder = async () => {
    if(user.id === order.userId){
      dispatch(setOpenConfirmModal(true))
      dispatch(setDeleteOrder(order))
    }
    else {
      initialError(true, 'Вы не можете удалить чужой заказ!', 'warning');
    }
  };

  return (
    <TableRow sx={{ "& > *": { borderBottom: "unset", background: user.id === order.userId ? "transparent" : "var(--disabledRowBg)"} }}>
      <TableCell>
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => setOpen(!open)}
          sx={{color: "var(--baseColorText)"}}
        >
          {open ? <KeyboardArrowUpIcon  /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        {order.username}
      </TableCell>
      <TableCell align="center">{order.orderNumber}</TableCell>
      <DateCell order={order}/>
      <TableCell align="right">{order.status}</TableCell>
      <TableCell align="right">{order.totalPrice} сум</TableCell>
      <TableCell align="right">{order.paymentMethod}</TableCell>
      <TableCell align="right">

        <IconButton onClick={handleEditOrder}>
          <EditIcon sx={{color: user.id === order.userId ? "var(--baseColor)" : "var(--whiteTextColor)"}}/>
        </IconButton>
        <IconButton onClick={handleDeleteOrder}>
          <ClearIcon sx={{color: user.id === order.userId ? "red":"var(--whiteTextColor)"}}/>
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
