"use client"
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  selectCurrentStatusOrder,
  selectStatusOrder,
  setCurrentStatusOrder,
} from "@/redux/slices/orderSlice";
import s from "./Modal.module.scss";

export default function StatusSelect() {
  const dispatch = useAppDispatch();
  const statusOrder = useAppSelector(selectStatusOrder);
  const currentStatusOrder = useAppSelector(selectCurrentStatusOrder);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setCurrentStatusOrder(event.target.value));
  };

  return (
    <FormControl 
    variant="standard" 
    className={s.paymentModal} 
    sx={{
      '& .MuiInputLabel-root': {color: 'var(--baseColorText)'},
      '& .MuiInputLabel-root.Mui-focused': {color: 'var(--baseColorText)'},
      '& .MuiInputBase-input': { color: 'var(--blackTextColor)' }, 
      '& .MuiSelect-icon': { color: 'var(--baseColorText)' },
      }}>
      <InputLabel id="demo-simple-select-standard-label" className={s.paymentModal_label} >
        Статус доставки
      </InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={currentStatusOrder}
        onChange={handleChange}
        label="Статус доставки"
        className={s.paymentModal_select}
      >
        {statusOrder.map((item, i) => (
          <MenuItem key={i} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
