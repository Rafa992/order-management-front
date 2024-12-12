import { selectAddressOrder, setAddressOrder } from "@/redux/slices/orderSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton, TextField } from "@mui/material";
import s from "./Modal.module.scss";

export default function AddressModal() {
  const dispatch = useAppDispatch();
  const addressOrder = useAppSelector(selectAddressOrder);

  return (
    <div className={s.bodyModal_address}>
      <TextField
        id="standard-basic"
        variant="standard"
        label="Введите адрес"
        value={addressOrder}
        onChange={(e) => dispatch(setAddressOrder(e.target.value))}
        className={s.bodyModal_address_input}
        sx={{
          "& .MuiInput-underline:before": { borderBottomColor: "grey" },
          "& .MuiInput-underline:after": {
            borderBottomColor: "var(--baseColorText)",
          },
          "& .MuiInputLabel-root": { color: "var(--baseColorText)" },
          "& .MuiInputLabel-root.Mui-focused": { color: "var(--baseColorText)" },
        }}
      />
      <IconButton onClick={() => dispatch(setAddressOrder(""))}>
        <ClearIcon sx={{color: 'var(--baseColorText)'}}/>
      </IconButton>
    </div>
  );
}
