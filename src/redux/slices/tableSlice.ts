import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
  openDrop: boolean;
}

const initialState: IInitialState = {
  openDrop: false,
};

const tableSlice = createSlice({
  name: "tableSlice",
  initialState,
  reducers: {
    setOpenDrop: (state, action: PayloadAction<boolean>) => {
      state.openDrop = action.payload;
    }
  },
});

export const selectOpenDrop = (state: RootState): boolean => state.tableReducer.openDrop;

export const { setOpenDrop } = tableSlice.actions;
export default tableSlice.reducer;
