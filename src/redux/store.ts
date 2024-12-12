import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {authApi} from '../api/auth.api'
import colorSlice from "./slices/colorSlice";
import errorSlice from "./slices/errorSlice";
import filterSlice from "./slices/filterSlice";
import modalSlice from "./slices/modalSlice";
import orderSlice from "./slices/orderSlice";
import productsSlice from "./slices/productsSlice";
import tableSlice from "./slices/tableSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer: {
        userReducer: userSlice,
        productsReducer: productsSlice,
        modalReducer: modalSlice,
        orderReducer: orderSlice,
        errorReducer: errorSlice,
        tableReducer: tableSlice,
        filterReducer: filterSlice,
        colorReducer: colorSlice,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(authApi.middleware) 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
