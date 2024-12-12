"use client";
import { Box, Typography, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useModalToggleProducts } from "@/hooks/modal/useModalToggleProducts";
import { uesAmount } from "@/hooks/products/useAmount";
import s from "./Modal.module.scss";
import useOpenList from "@/hooks/modal/useOpenList";
import { IProduct } from "@/types/products.types";

export default function ProductItemModal({ item }: { item: IProduct }) {
  const { removeAmount, addAmount } = uesAmount();
  const { modalToggleProducts } = useModalToggleProducts();
  const { openList } = useOpenList();

  return (
    <Box className={s.bodyModal_item}>
      <div className={s.bodyModal_left}>
        <Typography
          className={s.bodyModal_item_title}
          sx={{ ...(openList && { fontSize: "14px !important" }) }}
        >
          {item.title}
        </Typography>
        <div className={s.bodyModal_counterBlock}>
          <IconButton onClick={() => removeAmount(item.id)}>
            <RemoveIcon className={s.bodyModal_removeIcon} />
          </IconButton>
          <p className={s.bodyModal_amountText}>
            <span className={s.bodyModal_amount}>{item.amount}</span> шт.
          </p>
          <IconButton onClick={() => addAmount(item.id)}>
            <AddIcon className={s.bodyModal_addIcon} />
          </IconButton>
        </div>
      </div>
      <div className={s.bodyModal_right}>
        <Typography>{item.newPrice} сум</Typography>
        <IconButton onClick={() => modalToggleProducts(item.id)}>
          <ClearIcon sx={{color: 'var(--baseColorText)'}}/>
        </IconButton>
      </div>
    </Box>
  );
}
