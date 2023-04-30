import React from "react";
import styled from "styled-components";
import {
  BsSearch,
  BsThreeDotsVertical,
  AiOutlineArrowLeft,
} from "react-icons/all";
import { useState } from "react";
import useData from "../hooks/useData";

function ChatNavbar({ setOpen, currentUser }) {
  const [show, setShow] = useState(true);
  const { deleteChat } = useData();
  return (
    <NavbarStyle>
      <div className="userName">
        <span className="arrow">
          <AiOutlineArrowLeft
            onClick={() => {
              setOpen(false);
            }}
          ></AiOutlineArrowLeft>
        </span>
        <img className="img" src={currentUser.picture} alt="" />
        <h3>{currentUser.name}</h3>
      </div>
      <div className="btn">
        <BsSearch style={{ cursor: "pointer" }} />
        <BsThreeDotsVertical
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShow(!show);
          }}
        />
        {!show && (
          <ul className="show">
            <li>Mute Notifation</li>
            <li
              onClick={() => {
                deleteChat(currentUser);
              }}
            >
              Delete Chat
            </li>
            <li>Block</li>
          </ul>
        )}
      </div>
    </NavbarStyle>
  );
}
const NavbarStyle = styled.nav`
  .img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
  padding: 7px 30px 7px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f3f3;
  position: relative;
  transition: all 0.8s;
  .btn {
    display: flex;
    gap: 30px;
    font-size: 20px;
    color: #494848;
  }
  .show {
    position: absolute;
    top: 51px;
    padding-top: 6px;
    padding-bottom: 6px;
    background: white;
    display: flex;
    flex-direction: column;
    gap: 6px;
    border: 1px solid #494848;
    border-radius: 5px;
    list-style: none;
    right: 50px;
  }
  li {
    padding: 2px 45px 2px 25px;
    cursor: pointer;
    &:hover {
      background: #f8f3f3;
    }
  }
  .userName {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  h3 {
    font-size: 20px;
    font-weight: 300;
  }
  .arrow {
    display: none;
  }
  @media only screen and (max-width: 650px) {
    .arrow {
      display: block;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 350px) {
    h3 {
      font-size: 15px;
    }
    padding: 7px 10px 7px 10px;
    .btn {
      gap: 10px;
    }
    .userName {
      gap: 10px;
    }
  }
`;
export default ChatNavbar;
