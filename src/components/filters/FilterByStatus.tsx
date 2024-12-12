import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import s from './Filters.module.scss';
import { selectStatusOrder } from '@/redux/slices/orderSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { selectFilterStatus, selectOpenFilters, setFilterStatus, setOpenFilters } from "@/redux/slices/filterSlice";
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import useClearFilters from "@/hooks/table/useClearFilters";

export default function FilterByStatus() {
  const dispatch = useAppDispatch();
  const statusOrder = useAppSelector(selectStatusOrder);
  const {clearFilters} = useClearFilters();
  const openFilter = useAppSelector(selectOpenFilters);
  const filterStatus = useAppSelector(selectFilterStatus);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setFilterStatus(event.target.value as string)); 
  };

  const handleClearFilters = () => {
    clearFilters();
  };

  return (
    <Box className={s.filters_block_status}>
      {
        openFilter && (
          <IconButton onClick={()=> dispatch(setOpenFilters(false))}>
            <ClearIcon sx={{color: 'var(--baseColorText)'}}/>
          </IconButton>
        )
      }
      <Button variant="text" className={s.filters_block_status_clear} onClick={handleClearFilters}>
        Очистить фильтры
      </Button>
      <FormControl 
      fullWidth 
      variant="standard"
      sx={{
        '& .MuiInputLabel-root': {color: 'var(--baseColorText)'},
        '& .MuiInputLabel-root.Mui-focused': {color: 'var(--baseColorText)'},
        "& .MuiInputBase-input": { color: "var(--blackTextColor)" },
        }}>
      <InputLabel id="demo-simple-select-label">Фильтрация по статусу</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select-standard"
          value={filterStatus}
          label="Фильтрация по статусу"
          onChange={e=>handleChange(e)}
        >
          {statusOrder.map((item, i) => (
            <MenuItem key={i} value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
