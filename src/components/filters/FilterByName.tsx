import TextField from "@mui/material/TextField";
import s from "./Filters.module.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  selectFilterName,
  selectRadio,
  setFilterName,
  setValueRadio,
} from "@/redux/slices/filterSlice";

export default function FilterByName() {
  const dispatch = useAppDispatch();
  const valueRadio = useAppSelector(selectRadio);
  const filterName = useAppSelector(selectFilterName);

  const handleRadio = (val: string) => {
    dispatch(setFilterName(""));
    dispatch(setValueRadio(val));
  };

  return (
    <div className={s.filters_block_name}>
      <RadioGroup
        className={s.filters_block_name_group}
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={valueRadio}
        onChange={(e) => handleRadio(e.target.value)}
      >
        <FormControlLabel
          value="Фильтрация по имени"
          control={
            <Radio
              sx={{
                color: "gray",
                "&.Mui-checked": {
                  color: "var(--baseColorText)",
                },
              }}
            />
          }
          label="По имени"
        />
        <FormControlLabel
          value="Фильтрация по номеру"
          control={
            <Radio
              sx={{
                color: "gray",
                "&.Mui-checked": {
                  color: "var(--baseColorText)",
                },
              }}
            />
          }
          label="По номеру"
        />
      </RadioGroup>
      <TextField
        id="outlined-basic"
        label={valueRadio}
        value={filterName}
        onChange={(e) => dispatch(setFilterName(e.target.value))}
        variant="standard"
        sx={{
          "& .MuiInput-underline:before": { borderBottomColor: "grey" },
          "& .MuiInput-underline:after": {
            borderBottomColor: "var(--baseColorText)",
          },
          "& .MuiInputLabel-root": { color: "var(--baseColorText)" },
          "& .MuiInputLabel-root.Mui-focused": { color: "var(--baseColorText)" },
          "& .MuiInputBase-input": { color: "var(--blackTextColor)" },
        }}
      />
    </div>
  );
}
