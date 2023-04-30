import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BsSearch, ImMenu2 } from "react-icons/all";
// import useRequst from "../hooks/useRequst";
function SearchForm() {
  return (
    <FormStyle>
      <label>
        <BsSearch style={{ cursor: "pointer" }} />
        <input type="text" />
      </label>
    </FormStyle>
  );
}
const FormStyle = styled.form`
  padding: 7px 15px;
  display: flex;
  align-items: center;
  gap: 15px;

  border-bottom: 1px solid #dfdada;
  label {
    padding: 9px 15px;
    flex-grow: 1;
    background: #f8f3f3;
    display: flex;
    align-items: center;
    gap: 30px;
    border-radius: 10px;
  }
  input {
    flex-grow: 1;
    border: none;
    font-size: 17px;
    background: inherit;
    &:hover {
      border: none;
    }
    &:active {
      border: none;
    }
    &:focus {
      border: none;
      outline: none;
    }
  }
  @media only screen and (max-width: 950px) {
    label {
      padding: 7px 10px;
      flex-grow: 1;
      background: #f8f3f3;
      display: flex;
      align-items: center;
      gap: 20px;
      border-radius: 10px;
    }
  }
`;
export default SearchForm;
