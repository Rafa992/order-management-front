import { setOpenModal } from "@/redux/slices/modalSlice";
import { useAppDispatch } from "@/redux/store"

export default function useOpenModal() {
    const dispatch = useAppDispatch();

    const handleOpen = () => dispatch(setOpenModal(true));
    const handleClose = () => dispatch(setOpenModal(false));
    
  return {handleOpen, handleClose}
}
