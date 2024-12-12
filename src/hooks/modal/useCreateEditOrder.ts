import {
  selectAddressOrder,
  selectCommentOrder,
  selectCurrentStatusOrder,
  selectCheckedPaymentMethod,
} from "@/redux/slices/orderSlice";
import { selectUser } from "@/redux/slices/userSlice";
import { useAppSelector } from "@/redux/store";
import { selectTemporaryProducts } from "@/redux/slices/productsSlice";

export default function useCreateEditOrder() {
  const user = useAppSelector(selectUser);
  const address = useAppSelector(selectAddressOrder);
  const commentOrder = useAppSelector(selectCommentOrder);
  const temporaryProducts = useAppSelector(selectTemporaryProducts);
  const currentStatusOrder = useAppSelector(selectCurrentStatusOrder);
  const checkedPaymentMethod = useAppSelector(selectCheckedPaymentMethod);

  const createEditOrder = (orderNumber: string)=>{

    const totalAmount = temporaryProducts.reduce(
      (acm, item) => acm + item.amount,
      0
    );
    const totalPrice = temporaryProducts.reduce(
      (acm, item) => acm + item.newPrice,
      0
    );
    return {
      status: currentStatusOrder,
      totalAmount,
      totalPrice,
      address,
      paymentMethod: checkedPaymentMethod,
      comment: commentOrder,
      userId: user.id,
      username: user.name,
      orderNumber: orderNumber,
      products: temporaryProducts,
    };
  }

  return {
    createEditOrder,
  };
}
