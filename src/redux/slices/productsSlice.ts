import { IProduct } from "@/types/products.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";

interface IInitialState {
    products: IProduct[];
    temporaryProducts: IProduct[];
    checkedProducts: string[],
    searchProduct: string
}

const initialState:IInitialState = {
    products: [],
    temporaryProducts: [],
    checkedProducts: [],
    searchProduct: '',
}

const productsSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setAllProducts: (state, action:PayloadAction<IProduct[]>) => {
            state.products = action.payload
        },
        setTemporaryProducts: (state, action:PayloadAction<IProduct[]>) => {
            state.temporaryProducts = action.payload;
        },
        setCheckedProducts: (state, action:PayloadAction<string[]>) => {
            state.checkedProducts = action.payload;
        },
        setSearchProduct: (state, action:PayloadAction<string>) => {
            state.searchProduct = action.payload;
        }
    }
});

export const selectAllProducts = (state: RootState):IProduct[] => state.productsReducer.products;
export const selectCheckedProducts = (state: RootState):string[] => state.productsReducer.checkedProducts;
export const selectTemporaryProducts = (state: RootState):IProduct[] => state.productsReducer.temporaryProducts;
export const selectSearchProducts = (state: RootState):string => state.productsReducer.searchProduct;

export const {setAllProducts, setTemporaryProducts, setCheckedProducts, setSearchProduct} = productsSlice.actions;
export default productsSlice.reducer;