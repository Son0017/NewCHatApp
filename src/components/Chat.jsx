import React, { useState } from "react";
import styled, { css } from "styled-components";
import ChatNavbar from "./ChatNavbar";

import MessageList from "./MessageList";
import SendMessage from "./SendMessage";
import { userDataContext } from "../context/userDataContext";

function Chat({ open, setOpen }) {
  const { dispatch, currentUser } = userDataContext();
  return (
    <ChatStyle
      onClick={() => {
        dispatch({ type: "CLOSE" });
      }}
      open={open}
    >
      {currentUser && (
        <>
          <ChatNavbar setOpen={setOpen} currentUser={currentUser} />
          <MessageList />
          <SendMessage />
        </>
      )}
    </ChatStyle>
  );
}

const ChatStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  background: url("https://picsum.photos/seed/picsum/2000/3000");
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 770px) {
    width: 420px;
    overflow: hidden;
    display: none;
    ${(props) =>
      props.open &&
      css`
        display: flex;
      `};
    ${(props) =>
      !props.open &&
      css`
        display: none;
      `};
  }
`;
export default Chat;
