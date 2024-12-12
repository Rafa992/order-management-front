import { selectTemporaryProducts, setTemporaryProducts } from "@/redux/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

export const uesAmount = ()=> {
    const dispatch = useAppDispatch();
    const temporaryProducts = useAppSelector(selectTemporaryProducts);

    const removeAmount = (id: string) => {
        const newTemporaryProducts = temporaryProducts?.map((item) => {
          if (item.id === id && item.amount > 1) {
            return {
              ...item,
              amount: item.amount - 1,
              newPrice: item.newPrice - item.price,
            };
          }
          return item;
        });
        if (newTemporaryProducts)
          dispatch(setTemporaryProducts(newTemporaryProducts));
      };
      const addAmount = (id: string) => {
        const newTemporaryProducts = temporaryProducts?.map((item) => {
          if (item.id === id && item.amount) {
            return {
              ...item,
              amount: item.amount + 1,
              newPrice: item.newPrice + item.price,
            };
          }
          return item;
        });
        if (newTemporaryProducts)
          dispatch(setTemporaryProducts(newTemporaryProducts));
      };

      return {removeAmount, addAmount}

}