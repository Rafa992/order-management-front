import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  selectCheckedPaymentMethod,
  selectPaymentMethod,
  setCheckedPaymentMethod,
} from "@/redux/slices/orderSlice";
import s from "./Modal.module.scss";

export default function PayMentSelect() {
  const dispatch = useAppDispatch();
  const paymentMethod = useAppSelector(selectPaymentMethod);
  const checkedPaymentMethod = useAppSelector(selectCheckedPaymentMethod);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setCheckedPaymentMethod(event.target.value));
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
        Метод оплаты
      </InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={checkedPaymentMethod}
        onChange={handleChange}
        label="Метод оплаты"
        className={s.paymentModal_select}
      >
        {paymentMethod.map((item, i) => (
          <MenuItem key={i} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
