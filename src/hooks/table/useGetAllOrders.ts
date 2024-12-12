import { axiosWithAuth } from "@/api/interceptors";
import { setAllOrders, setFilteredOrders } from "@/redux/slices/orderSlice";
import { useAppDispatch } from "@/redux/store";

export default function useGetAllOrders() {
  const dispatch = useAppDispatch();

  const getAllOrders = async () => {
    try {
      const res = await axiosWithAuth.get("/products/getAll-orders");
      const data = await res.data;
      dispatch(setAllOrders(data));
      dispatch(setFilteredOrders(data));
    } catch (error) {
      console.log("error receiving all orders", error);
    }
  };

  return { getAllOrders };
}
