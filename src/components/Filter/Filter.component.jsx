import React, { useState } from "react";

import {
  FilterDropDown,
  FilterControl,
  FilterSelectValue,
  FilterArrow,
  FilterOptions,
  FilterOption,
  FilterInput,
  Button,
} from "./FilterStyles";

import {filterd} from "../../constants/filter"

const options = ["nodejs", "reactjs", "dotnet"];

filterd.push("dsdsds")


console.log(filterd);



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
          return (
            <FilterOption onChange={() => console.log(option)} key={i}>
              <label style={{ cursor: "pointer" }}>
                <FilterInput />
                {option.toString()}
              </label>
            </FilterOption>
          );
        })}
        <Button>Filter</Button>
      </FilterOptions>
    </FilterDropDown>
  );
};

export default Filter;
