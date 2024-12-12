"use client";
import { useTheme } from "@mui/material/styles";
import { Box, IconButton, TextField } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import useOpenList from "@/hooks/modal/useOpenList";
import {
  selectSearchProducts,
  setSearchProduct,
} from "@/redux/slices/productsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import s from "./Modal.module.scss";

export default function TopLeftModal() {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const searchProduct = useAppSelector(selectSearchProducts);
  const { handleDrawerClose } = useOpenList();

  return (
    <Box className={s.topLeftModal} sx={{ ...theme.mixins.toolbar }}>
      <TextField
        fullWidth
        variant="standard"
        label="Поиск..."
        value={searchProduct}
        onChange={(e) => dispatch(setSearchProduct(e.target.value))}
        className={s.topLeftModal_textField}
        sx={{
          "& .MuiInput-underline:before": { borderBottomColor: "grey" },
          "& .MuiInput-underline:after": { borderBottomColor: "var(--baseColorText)" },
          "& .MuiInputLabel-root": { color: "var(--baseColorText)" },
          "& .MuiInputLabel-root.Mui-focused": { color: "var(--baseColorText)" },
        }}
      />
      <IconButton onClick={() => dispatch(setSearchProduct(""))}>
        <ClearIcon sx={{color: 'var(--baseColorText)'}} />
      </IconButton>
      <IconButton onClick={handleDrawerClose}>
        {
        theme.direction === "ltr" 
        ? <ChevronLeft sx={{color: 'var(--baseColorText)'}} /> 
        : <ChevronRight sx={{color: 'var(--baseColorText)'}}/>
        }
      </IconButton>
    </Box>
  );
}
