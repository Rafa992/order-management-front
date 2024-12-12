import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
  openFilters: boolean;
  valueRadio: string;
  filterName: string;
  filterDate: { startDate: string, endDate: string };
  filterStatus: string;
}

const initialState: IInitialState = {
  openFilters: false,
  valueRadio: 'Фильтрация по имени',
  filterName: '',
  filterDate: { startDate: '', endDate: '' },
  filterStatus: '',
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setValueRadio: (state, action: PayloadAction<string>) => {
      state.valueRadio = action.payload;
    },
    setOpenFilters: (state, action: PayloadAction<boolean>) => {
      state.openFilters = action.payload;
    },
    setFilterName: (state, action: PayloadAction<string>) => {
      state.filterName = action.payload;
    },
    setFilterDate: (state, action: PayloadAction<{ startDate: string, endDate: string }>) => {
      state.filterDate = action.payload;
    },
    setFilterStatus: (state, action: PayloadAction<string>) => {
      state.filterStatus = action.payload;
    },
  },
});

export const selectOpenFilters = (state: RootState): boolean =>
  state.filterReducer.openFilters;
export const selectRadio = (state: RootState): string =>
  state.filterReducer.valueRadio;
export const selectFilterName = (state: RootState): string =>
  state.filterReducer.filterName;
export const selectFilterDate = (state: RootState): { startDate: string, endDate: string } =>
  state.filterReducer.filterDate;
export const selectFilterStatus = (state: RootState): string =>
  state.filterReducer.filterStatus;


export const {
  setOpenFilters,
  setValueRadio,
  setFilterName,
  setFilterDate,
  setFilterStatus,
} = filterSlice.actions;
export default filterSlice.reducer;
