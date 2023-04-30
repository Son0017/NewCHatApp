import React, { useEffect, useState } from "react";

import styled, { css } from "styled-components";
import { BsSearch, ImMenu2 } from "react-icons/all";

import ListChat from "./ListChat";
import { userDataContext } from "../context/userDataContext";
import { useAuth0 } from "@auth0/auth0-react";

function NewChatItem({ setOpen }) {
  const { users, newChat } = userDataContext();
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const { user } = useAuth0();
  useEffect(() => {
    if (name.trim().length > 0) {
      let newArr = users.filter(
        (item) =>
          item.nickname.includes(name.trim()) && user.nickname !== item.nickname
      );
      setData(newArr);
    } else {
      setData([]);
    }
  }, [name]);

  return (
    <NewChat close={newChat}>
      <div style={{ background: "blue", padding: "30px 15px" }}>
        <h3>New Chat</h3>
      </div>
      <FormStyle>
        <label>
          <BsSearch style={{ cursor: "pointer" }} />
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <ImMenu2 style={{ fontSize: "25px", cursor: "pointer" }} />
      </FormStyle>
      <ListChat data={data} setOpen={setOpen} />
    </NewChat>
  );
}
const NewChat = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  background: white;
  width: 420px;
  @media only screen and (max-width: 950px) {
    width: 320px;
  }
  transform: translate(-420px);
  transition: all 0.5s;
  ${(props) =>
    props.close &&
    css`
      transform: translate(0);
    `};
`;

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
`;
export default NewChatItem;
