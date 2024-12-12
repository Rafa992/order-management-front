import { selectOpenList, setOpenList } from "@/redux/slices/modalSlice";
import { setSearchProduct } from "@/redux/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useCallback } from "react";

const drawerWidth = "40%";

export default function useOpenList() {
  const dispatch = useAppDispatch();
  const openList = useAppSelector(selectOpenList)

  const handleDrawerOpen = useCallback(() => dispatch(setOpenList(true)), []);
  const handleDrawerClose = () => {
    dispatch(setOpenList(false));
    dispatch(setSearchProduct(''));
  } 

  return {
    drawerWidth,
    openList,
    setOpenList,
    handleDrawerOpen,
    handleDrawerClose
  }

}
