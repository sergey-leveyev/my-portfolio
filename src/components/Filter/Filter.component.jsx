import React, { useState } from "react";
import {
  FilterDropDown,
  FilterControl,
  FilterSelectValue,
  FilterArrow,
  FilterOptions,
  FilterOption,
} from "./FilterStyles";



const options = ["nodejs", "reactjs"];

const Filter = () => {
  const [open, setOpen] = useState(false);

  return (
    <FilterDropDown>
      <FilterControl
        onClick={() => {
          setOpen(!open);
        }}
      >
        <FilterSelectValue>Select</FilterSelectValue>
        <FilterArrow />
      </FilterControl>
      <FilterOptions display={open ? "block" : null}>
        {options.map((option, i) => {
          return <FilterOption key={i}>{option.toString()}</FilterOption>;
        })}
      </FilterOptions>
    </FilterDropDown>
  );
};

export default Filter;
