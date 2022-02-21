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

import { filterd } from "../../constants/filter";

// const options = ["nodejs", "reactjs", "dotnet"];

const options2 = [
  {
    option: "nodejs",
    checked: false,
  },
  {
    option: "reactjs",
    checked: false,
  },
];

// filterd.push();



const Filter = ({setList}) => {
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
        {options2.map((e, i) => {
          return (
            <FilterOption
              onChange={() => {
                options2[i].checked = !options2[i].checked;
                if (options2[i].checked) {
                  // console.log(options2[i].option, options2[i].checked);
                  console.log(filterd);
                  filterd.push(options2[i].option);
                }
              }}
              key={i}
            >
              <label style={{ cursor: "pointer" }}>
                <FilterInput />
                {e.option}
              </label>
            </FilterOption>
          );
        })}
        <Button>Done</Button>
      </FilterOptions>
    </FilterDropDown>
  );
};

export default Filter;
