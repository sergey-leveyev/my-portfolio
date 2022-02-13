import styled from "styled-components";

export const FilterDropDown = styled.div`
  position: relative;
  color: #333;
  cursor: pointer;
  border: 1px solid #1a263f;
  box-shadow: 2px 2px 10px rgb(80 78 78 / 50%);
  padding: 5px;
`;

export const FilterControl = styled.div``;

export const FilterSelectValue = styled.div`
  color: #9cc9e3;
  font-weight: bold;
`;

export const FilterArrow = styled.div`
  border-color: #999 transparent transparent;
  border-style: solid;
  border-width: 7px 6px 0;
  content: " ";
  display: block;
  height: 0;
  margin-top: -0.4rem;
  position: absolute;
  right: 10px;
  top: 14px;
  width: 0;
`;

export const FilterOptions = styled.div`
  display: ${(props) => (props.display ? props.display : "none")};
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 130%;
  width: 100%;
  z-index: 1000;
  -webkit-overflow-scrolling: touch;
`;

export const FilterOption = styled.div`
  box-sizing: border-box;
  color: rgba(51, 51, 51, 0.8);
  cursor: pointer;
  display: block;
  padding: 8px 10px;

  &:hover {
    background-color: #f2f9fc;
    color: #333;
  }
`;

export const FilterInput = styled.input.attrs({
  type: "checkbox",
})`
  margin-right: 3px;
  position: relative;
  top: 1px;
 
`;

export const Button = styled.button`
  background-color: #4285f4;
  padding: 5px 5px;
  margin: 8px 10px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  width: 100px;

  &:hover {
    background-color: #3a70c9;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  }
`;
