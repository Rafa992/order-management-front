import { IAllOrders, IEditOrder, ITemporaryOrder } from "@/types/products.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
  editOrder: IEditOrder;
  addressOrder: string;
  commentOrder: string;
  temporaryOrder: ITemporaryOrder;
  allOrders: IAllOrders[];
  filteredOrders: IAllOrders[];
  statusOrder: string[];
  currentStatusOrder: string;
  paymentMethod: string[];
  checkedPaymentMethod: string;
  deleteOrder: IAllOrders;
}

const initialState: IInitialState = {
  editOrder: {} as IEditOrder,
  addressOrder: "",
  commentOrder: "",
  temporaryOrder: {} as ITemporaryOrder,
  allOrders: [],
  filteredOrders: [],
  statusOrder: ["Ожидает оплаты", "Отправлен", "Доставлен"],
  currentStatusOrder: "Ожидает оплаты",
  paymentMethod: [
    "Credit Card",
    "PayPal",
    "Apple Pay",
    "Google Pay",
    "Bank Transfer",
    "Cash on Delivery",
    "Bitcoin",
  ],
  checkedPaymentMethod: "Credit Card",
  deleteOrder: {} as IAllOrders,
};

const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    setEditOrder: (state, action: PayloadAction<IEditOrder>) => {
      state.editOrder = action.payload;
    },
    setCurrentStatusOrder: (state, action: PayloadAction<string>) => {
      state.currentStatusOrder = action.payload;
    },
    setAddressOrder: (state, action: PayloadAction<string>) => {
      state.addressOrder = action.payload;
    },
    setCommentOrder: (state, action: PayloadAction<string>) => {
      state.commentOrder = action.payload;
    },
    setTemporaryOrder: (state, action: PayloadAction<ITemporaryOrder>) => {
      state.temporaryOrder = action.payload;
    },
    setCheckedPaymentMethod: (state, action: PayloadAction<string>) => {
      state.checkedPaymentMethod = action.payload;
    },
    setAllOrders: (state, action: PayloadAction<IAllOrders[]>) => {
      state.allOrders = action.payload;
    },
    setFilteredOrders: (state, action: PayloadAction<IAllOrders[]>) => {
      state.filteredOrders = action.payload;
    },
    setDeleteOrder: (state, action: PayloadAction<IAllOrders>) => {
      state.deleteOrder = action.payload;
    },
  },
});

export const selectEditOrder = (state: RootState): IEditOrder =>
  state.orderReducer.editOrder;
export const selectStatusOrder = (state: RootState): string[] =>
  state.orderReducer.statusOrder;
export const selectCurrentStatusOrder = (state: RootState): string =>
  state.orderReducer.currentStatusOrder;
export const selectTemporaryOrder = (state: RootState): ITemporaryOrder =>
  state.orderReducer.temporaryOrder;
export const selectAddressOrder = (state: RootState): string =>
  state.orderReducer.addressOrder;
export const selectCommentOrder = (state: RootState): string =>
  state.orderReducer.commentOrder;
export const selectPaymentMethod = (state: RootState): string[] =>
  state.orderReducer.paymentMethod;
export const selectCheckedPaymentMethod = (state: RootState): string =>
  state.orderReducer.checkedPaymentMethod;
export const selectAllOrders = (state: RootState): IAllOrders[] =>
  state.orderReducer.allOrders;
export const selectFilteredOrders = (state: RootState): IAllOrders[] =>
  state.orderReducer.filteredOrders;
export const selectDeleteOrder = (state: RootState): IAllOrders =>
  state.orderReducer.deleteOrder;

export const {
  setEditOrder,
  setAllOrders,
  setDeleteOrder,
  setAddressOrder,
  setCommentOrder,
  setTemporaryOrder,
  setFilteredOrders,
  setCurrentStatusOrder,
  setCheckedPaymentMethod,
} = orderSlice.actions;
export default orderSlice.reducer;
