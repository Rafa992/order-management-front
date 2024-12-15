import TextField from "@mui/material/TextField";
import { InputLabel } from "@mui/material";
import s from "./Filters.module.scss";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { selectFilterDate, setFilterDate } from "@/redux/slices/filterSlice";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function FilterByDate() {

  const dispatch = useAppDispatch();
  const filterDate = useAppSelector(selectFilterDate);

  return (
    <div className={s.filters_block_date}>
      <InputLabel sx={{color: "var(--baseColorText)"}}>Фильтрация по дате</InputLabel>
      <div className={s.filters_block_date_block}>
        {/* <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select a date"
      /> */}
        <TextField 
        type="date" 
        variant="standard"
        value={filterDate.startDate}
        onChange={e=> dispatch(setFilterDate({...filterDate, startDate: e.target.value}))}
        sx={{
            "& .MuiInput-underline:before": { borderBottomColor: "grey" },
            "& .MuiInput-underline:after": { borderBottomColor: "var(--baseColorText)" },
            "& .MuiInputLabel-root": { color: "var(--whiteTextColor)" },
            "& .MuiInputLabel-root.Mui-focused": { color: "var(--baseColorText)" },
            "& .MuiInputBase-input": { color: "var(--blackTextColor)" },
            "& .MuiSvgIcon-root": { color: "var(--blackTextColor)" },
          }}
         />
        <TextField 
        type="date" 
        variant="standard"
        value={filterDate.endDate}
        onChange={e=> dispatch(setFilterDate({...filterDate, endDate: e.target.value}))} 
        sx={{
            "& .MuiInput-underline:before": { borderBottomColor: "grey" },
            "& .MuiInput-underline:after": { borderBottomColor: "var(--baseColorText)" },
            "& .MuiInputLabel-root": { color: "var(--whiteTextColor)" },
            "& .MuiInputLabel-root.Mui-focused": { color: "var(--baseColorText)" },
            "& .MuiInputBase-input": { color: "var(--blackTextColor)" },
            "& .MuiSvgIcon-root": { color: "var(--blackTextColor)" },
          }}
        />
      </div>
    </div>
  );
}
