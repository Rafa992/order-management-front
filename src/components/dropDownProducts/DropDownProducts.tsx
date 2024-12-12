import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppSelector } from "@/redux/store";

export default function DropDownProducts() {
  const [age, setAge] = React.useState("");
  const products = useAppSelector((state) => state.productsReducer.products);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120, width: "100%" }}
      >
        <InputLabel id="demo-simple-select-standard-label">
          Выберите товар
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          {products?.map((product) => (
            <MenuItem
              key={product.id}
              value={product.title}
              className="flex justify-between"
            >
              <p className="flex justify-between w-full">
                <span>{product.title}</span>
                <span>{product.price} сум</span>
              </p>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
