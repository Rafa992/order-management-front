"use client";
import { Box } from "@mui/material";
import { useAppSelector } from "@/redux/store";
import { selectTemporaryProducts } from "@/redux/slices/productsSlice";
import s from "./Modal.module.scss";
import useOpenList from "@/hooks/modal/useOpenList";
import ProductItemModal from "./ProductItemModal";
import AddressModal from "./AddressModal";
import CommentModal from "./CommentModal";
import PayMentSelect from "./PayMentSelect";
import { selectEditModal } from "@/redux/slices/modalSlice";
import StatusSelect from "./StatusSelect";

export default function BodyModal() {
  const temporaryProducts = useAppSelector(selectTemporaryProducts);
  const { drawerWidth, openList } = useOpenList();
  const editModal = useAppSelector(selectEditModal)

  return (
    <Box
      component="main"
      className={s.bodyModal}
      sx={{
        ...(openList && {
          width: `calc(100% - ${drawerWidth})`,
          marginLeft: "auto",
        }),
      }}
    >
      {temporaryProducts.length == 0 && !editModal && (
        <h2 className={s.bodyModal_empty}>Ни одного товара не выбрано.</h2>
      )}
      {temporaryProducts.length > 0 && (
        <div className={s.bodyModal_block}>
          <div className={s.bodyModal_block_textFields}>
            <AddressModal />
            <CommentModal />
          </div>
          <div className={s.bodyModal_block_selects}>
            <PayMentSelect />
            {
              editModal && (
                <StatusSelect />
              )
            }
          </div>
        </div>
      )}
      {temporaryProducts?.map((item) => (
        <ProductItemModal key={item.id} item={item} />
      ))}
    </Box>
  );
}
