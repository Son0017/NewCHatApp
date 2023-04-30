import React, { useState } from "react";
import styled from "styled-components";
import { userDataContext } from "../context/userDataContext";

function ListChat({ setOpen, data }) {
  const { dispatch, currentUser } = userDataContext();
  const [style, setStyle] = useState("");
  return (
    <ListChatStyle>
      {data &&
        data.map((item) => {
          return (
            <li
              key={item.email}
              className={style === item.nickname ? "check noChek" : "noChek"}
              onClick={() => {
                dispatch({ type: "CURRENT_USER", payload: item });
                setOpen(true);
                setStyle(item.nickname);
              }}
            >
              <div className="img">
                <img width={60} height={60} src={item.picture} alt="" />
              </div>
              <div className="userName">
                <div>
                  <h3>{item.name}</h3>
                  <p style={{ color: "blue" }}>
                    {item.newMes
                      ? `${
                          item.newMes.from === currentUser &&
                          currentUser.nickname
                            ? currentUser.given_name
                            : "you"
                        }: ${item.newMes.message}`
                      : item.email}
                  </p>
                </div>
                {item.newMes && item.newMes.new && (
                  <span className="newMes"></span>
                )}
              </div>
            </li>
          );
        })}
    </ListChatStyle>
  );
}

const ListChatStyle = styled.ul`
  list-style: none;
  img {
    border-radius: 50%;
  }
  .img {
    padding: 10px;
  }
  .noChek {
    display: flex;
    gap: 15px;
    cursor: pointer;
    &:hover {
      background: #f8f3f3;
    }
  }
  .newMes {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: blue;
  }
  .check {
    background: #4e4eecc7;
    &:hover {
      background: #4e4eecc7;
    }
  }
  .userName {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 7px;
    padding-right: 15px;
    border-bottom: 1px solid #dfdada;
    flex-grow: 1;
    font-size: 17px;
  }
  h3 {
    font-weight: 300;
    margin-bottom: 7px;
  }
  p {
    font-size: 15px;
  }
  span {
    font-size: 11px;
  }
  @media only screen and (max-width: 950px) {
    img {
      width: 50px;
      height: 50px;
    }
  }
  @media only screen and (max-width: 770px) {
    .check {
      background: inherit;
    }
  }
`;
export default ListChat;
