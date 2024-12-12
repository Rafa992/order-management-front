import {
  selectAddressOrder,
  selectCheckedPaymentMethod,
  selectCommentOrder,
  selectCurrentStatusOrder,
} from "@/redux/slices/orderSlice";
import { selectTemporaryProducts } from "@/redux/slices/productsSlice";
import { selectUser } from "@/redux/slices/userSlice";
import { useAppSelector } from "@/redux/store";
import { generationOrderNumber } from "@/services/generationOrderNumber.service";

export default function useCreateTemporaryOrder() {
  const user = useAppSelector(selectUser);
  const temporaryProducts = useAppSelector(selectTemporaryProducts);
  const address = useAppSelector(selectAddressOrder);
  const checkedPaymentMethod = useAppSelector(selectCheckedPaymentMethod);
  const commentOrder = useAppSelector(selectCommentOrder);
  const currentStatusOrder = useAppSelector(selectCurrentStatusOrder);

  const createTemporaryOrder = ()=>{

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
      orderNumber: generationOrderNumber(),
      products: temporaryProducts,
    };

  }

  return {
    createTemporaryOrder: createTemporaryOrder(),
  };
}
