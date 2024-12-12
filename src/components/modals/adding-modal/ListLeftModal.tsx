"use client";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useAppSelector } from "@/redux/store";
import { useModalToggleProducts } from "@/hooks/modal/useModalToggleProducts";
import useFilterProductsModal from "@/hooks/modal/useFilterProductsModal";
import { selectCheckedProducts } from "@/redux/slices/productsSlice";
import s from "./Modal.module.scss";

export default function ListLeftModal() {
  const checkedProducts = useAppSelector(selectCheckedProducts);
  const { modalToggleProducts } = useModalToggleProducts();
  const { filteredProducts } = useFilterProductsModal();

  return (
    <List className={s.listLeftModal}>
      {filteredProducts.map((product) => (
        <ListItem
          key={product.id}
          className={s.listLeftModal_item}
          onClick={() => modalToggleProducts(product.id)}
        >
          <Checkbox
            checked={checkedProducts.includes(product.id)}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": product.id }}
            className={s.checkbox}
          />
          <ListItemText
            className={s.listLeftModal_title}
            id={product.id}
            primary={product.title}
          />
          <span className={s.listLeftModal_price}>{product.price} сум</span>
        </ListItem>
      ))}
    </List>
  );
}
