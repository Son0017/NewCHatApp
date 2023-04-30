import React from "react";
import styled from "styled-components";
import { BsFillChatLeftDotsFill, BsThreeDotsVertical } from "react-icons/all";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { userDataContext } from "../context/userDataContext";
function Navbar() {
  const [show, setShow] = useState(true);
  const { user, logout } = useAuth0();
  const { dispatch } = userDataContext();
  return (
    <NavbarStyle>
      <div className="img">
        <img width={40} height={40} src={user.picture} alt="" />
      </div>
      <div className="btn">
        <BsFillChatLeftDotsFill
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch({ type: "OPEN" });
          }}
        />
        <BsThreeDotsVertical
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShow(!show);
          }}
        />
        {!show && (
          <ul className="show">
            <li>Create Group</li>
            <li
              onClick={() => {
                logout({ logoutParams: { returnTo: window.location.origin } });
              }}
            >
              Log out
            </li>
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
    overflow: hidden;
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
`;
export default Navbar;
