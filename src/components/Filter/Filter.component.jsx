import React, { useState } from "react";
import { useRouter } from "next/router";

import {
  FilterDropDown,
  FilterControl,
  FilterSelectValue,
  FilterArrow,
  FilterForm,
  FilterOption,
  FilterInput,
  Button,
} from "./FilterStyles";

const options = [
  {
    option: "nodejs",
    checked: false,
  },
  {
    option: "reactjs",
    checked: false,
  },
];

const Filter = ({ setList }) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (category.trim()) {
      router.push(`/?category=${category}`);
    } else {
      router.push("/");
    }
  };

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
      <FilterForm onSubmit={submitHandler} display={open ? "block" : null}>
        {options.map((e, i) => {
          return (
            <FilterOption
              onChange={() => {
                options[i].checked = !options[i].checked;
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
        <Button>Filter</Button>
      </FilterForm>
    </FilterDropDown>
  );
};

export default Filter;
