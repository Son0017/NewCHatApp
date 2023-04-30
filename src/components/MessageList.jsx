import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { dataContext } from "../context/dataContext";
import { userDataContext } from "../context/userDataContext";
import useData from "../hooks/useData";
import { useAuth0 } from "@auth0/auth0-react";
function MessageList() {
  const { user } = useAuth0();
  const { currentUser } = userDataContext();
  const { message } = dataContext();
  const { getMessages, updateMes } = useData();
  const data = useRef("");

  function getDay(item) {
    if (
      `${new Date(item.time.secunds).getDate()}.${
        new Date(item.time.secunds).getMonth() < 10
          ? `0${new Date(item.time.secunds).getMonth()}`
          : new Date(item.time.secunds).getMonth()
      }` !== data.current
    ) {
      data.current = `${new Date(item.time.secunds).getDate()}.${
        new Date(item.time.secunds).getMonth() < 10
          ? `0${new Date(item.time.secunds).getMonth()}`
          : new Date(item.time.secunds).getMonth()
      }`;
      return <p className="getDataFull">{data.current}</p>;
    } else {
      return <></>;
    }
  }

  useEffect(() => {
    getMessages(currentUser);
  }, [currentUser]);

  return (
    <MessageListStyle>
      {message &&
        message.map((item, i) => {
          if (i === 0) {
            <i key={Math.random()}>{updateMes(currentUser, item)}</i>;
          }
          if (i === message.length - 1) {
            data.current = "";
          }
          if (item.from === user.nickname) {
            return (
              <>
                <li className="user" key={Math.random()}>
                  <div>
                    <span>{item.message}</span>
                    <span className="clock">
                      {new Date(item.time.secunds).getHours() < 10
                        ? `0${new Date(item.time.secunds).getHours()}`
                        : new Date(item.time.secunds).getHours()}
                      :
                      {new Date(item.time.secunds).getMinutes() < 10
                        ? `0${new Date(item.time.secunds).getMinutes()}`
                        : new Date(item.time.secunds).getMinutes()}
                    </span>
                  </div>
                </li>
                {getDay(item)}
              </>
            );
          } else {
            return (
              <>
                <li className="user2" key={Math.random()}>
                  <div className="div">
                    <span>{item.message}</span>
                    <span className="clock">
                      {new Date(item.time.secunds).getHours() < 10
                        ? `0${new Date(item.time.secunds).getHours()}`
                        : new Date(item.time.secunds).getHours()}
                      :
                      {new Date(item.time.secunds).getMinutes() < 10
                        ? `0${new Date(item.time.secunds).getMinutes()}`
                        : new Date(item.time.secunds).getMinutes()}
                    </span>
                  </div>
                </li>
                {getDay(item)}
              </>
            );
          }
        })}
    </MessageListStyle>
  );
}

const MessageListStyle = styled.div`
  overflow-y: auto;
  list-style: none;
  padding: 15px 95px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  span {
    display: block;
  }
  .clock {
    font-size: 10px;
    text-align: end;
    margin-top: 5px;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    letter-spacing: 1px;
  }
  div {
    border-radius: 5px;
    justify-content: space-between;
    background-color: #69db69ac;
    display: inline-block;
    padding: 5px 7px;
    padding-bottom: 15px;
    min-width: 100px;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      100% 75%,
      100% 100%,
      75% 75%,
      0 75%
    );
  }
  .div {
    clip-path: polygon(0 0, 42% 0, 100% 0, 100% 75%, 25% 76%, 0 100%, 0 75%);
  }
  .user {
    display: flex;
    justify-content: flex-end;
  }
  .user2 {
    display: flex;
    justify-content: flex-start;
  }
  .getDataFull {
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 5px;
    padding: 5px 7px;
    background: white;
    border-radius: 5px;
  }
  @media only screen and (max-width: 950px) {
    padding: 15px 25px;
  }
`;

export default MessageList;
