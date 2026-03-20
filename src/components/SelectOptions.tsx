import { FormControl, MenuItem, Select } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import React from "react";
interface SelectOptionsProps {
  data: string[];
  type: string;
  value: string;
  onChange: (e: SelectChangeEvent<string>) => void;
}
const SelectOptions: React.FC<SelectOptionsProps> = ({
  data,
  type,
  value,
  onChange,
}) => {
  return (
    <div>
      <span>Lọc theo {type}</span>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={value}
          onChange={onChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>Mặc định</em>
          </MenuItem>
          {type === "type"
            ? data?.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))
            : data?.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectOptions;
