import {
  setCheckedProducts,
  setTemporaryProducts,
} from "@/redux/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

export const useModalToggleProducts = () => {
  const dispatch = useAppDispatch();

  const temporaryProducts = useAppSelector((state) => state.productsReducer.temporaryProducts);
  const checkedProducts = useAppSelector((state) => state.productsReducer.checkedProducts);
  const allProducts = useAppSelector((state) => state.productsReducer.products);

  const modalToggleProducts = (productId: string) => {
    if (checkedProducts.includes(productId)) {
      const newTemporaryProducts = temporaryProducts.filter(
        (item) => item.id !== productId
      );
      const newCheckedProducts = checkedProducts.filter(
        (id) => id !== productId
      );
      dispatch(setCheckedProducts(newCheckedProducts));
      dispatch(setTemporaryProducts(newTemporaryProducts));
    } else {
      const currentProduct = allProducts.filter(
        (item) => item.id === productId
      )[0];
      dispatch(setCheckedProducts([...checkedProducts, productId]));
      dispatch(setTemporaryProducts([...temporaryProducts, currentProduct]));
    }
  };
  return { modalToggleProducts };
};
