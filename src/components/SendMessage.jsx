import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSend, BsEmojiSmile } from "react-icons/all";
import useData from "../hooks/useData";
import { userDataContext } from "../context/userDataContext";

function SendMessage() {
  const [inputVal, setInputVal] = useState("");
  const { currentUser } = userDataContext();
  const { sendMessage, addListChat } = useData();
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputVal("");
    if (inputVal.trim().length > 0) {
      addListChat(currentUser, {
        message: inputVal,
        time: {
          secunds: new Date().getTime(),
        },
        new: true,
      });
      sendMessage(currentUser, {
        message: inputVal,
        time: {
          secunds: new Date().getTime(),
        },
        new: true,
      });
    }
  };
  return (
    <SendMessageStyle onSubmit={handleSubmit}>
      <BsEmojiSmile style={{ cursor: "pointer", fontSize: "25px" }} />
      <label>
        <input
          type="text"
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          value={inputVal}
        />
      </label>
      <button>
        <AiOutlineSend style={{ cursor: "pointer", fontSize: "25px" }} />
      </button>
    </SendMessageStyle>
  );
}

const SendMessageStyle = styled.form`
  padding: 10px 35px;
  background: #f8f3f3;
  display: flex;
  align-items: center;
  gap: 30px;
  label {
    flex-grow: 1;
    background: white;
    padding: 15px 25px;
    border-radius: 25px;
  }
  input {
    flex-grow: 1;
    font-size: 15px;
    background: inherit;
    border: none;
    &:focus {
      outline: none;
    }
  }
  button {
    background: none;
    border: none;
    outline: none;
  }
  @media only screen and (max-width: 650px) {
    padding: 10px 15px;
    gap: 20px;
    label {
      flex-grow: 1;
      background: white;
      padding: 10px 14px;
      border-radius: 25px;
    }
  }
  @media only screen and (max-width: 320px) {
    padding: 3px 7px;
    gap: 10px;
    label {
      flex-grow: 1;
      background: white;
      padding: 6px 10px;
      border-radius: 25px;
    }
  }
`;

export default SendMessage;
