import { IUser } from "@/types/auth.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IInitialState {
    user: IUser
}

const initialState: IInitialState = {
    user: {} as IUser
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        getUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        } 
    }
})

export const selectUser = (state: RootState) => state.userReducer.user

export const {getUser} = userSlice.actions
export default userSlice.reducer