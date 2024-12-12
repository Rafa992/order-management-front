import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";

interface IInitialState {
    openModal: boolean;
    editModal: boolean;
    paletteModal: boolean;
    openList: boolean;
    openConfirmModal: boolean;
}

const initialState:IInitialState = {
    openModal: false,
    editModal: false,
    paletteModal: false,
    openList: false,
    openConfirmModal: false,
}

const modalSlice = createSlice({
    name: 'modalSlice',
    initialState,
    reducers: {
        setOpenModal: (state, action:PayloadAction<boolean>) => {
            state.openModal = action.payload
        },
        setEditModal: (state, action:PayloadAction<boolean>) => {
            state.editModal = action.payload
        },
        setPaletteModal: (state, action:PayloadAction<boolean>) => {
            state.paletteModal = action.payload
        },
        setOpenList: (state, action:PayloadAction<boolean>) => {
            state.openList = action.payload
        },
        setOpenConfirmModal: (state, action:PayloadAction<boolean>) => {
            state.openConfirmModal = action.payload
        },
    }
});

export const selectOpenModal = (state: RootState) => state.modalReducer.openModal;
export const selectEditModal = (state: RootState) => state.modalReducer.editModal;
export const selectPaletteModal = (state: RootState) => state.modalReducer.paletteModal;
export const selectOpenList = (state: RootState) => state.modalReducer.openList;
export const selectOpenConfirmModal = (state: RootState) => state.modalReducer.openConfirmModal;

export const {setOpenModal, setEditModal, setPaletteModal, setOpenList, setOpenConfirmModal} = modalSlice.actions
export default modalSlice.reducer