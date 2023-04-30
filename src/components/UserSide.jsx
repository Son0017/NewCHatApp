import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";
import ListChat from "./ListChat";
import styled, { css } from "styled-components";
import NewChatItem from "./NewChatItem";
import { dataContext } from "../context/dataContext";
import useData from "../hooks/useData";
import { useAuth0 } from "@auth0/auth0-react";
import { userDataContext } from "../context/userDataContext";

function UserSide({ setOpen, open }) {
  const { getListUser } = useData();
  const { currentUser, dispatch } = userDataContext();
  const { listUsers } = dataContext();
  const { user } = useAuth0();
  useEffect(() => {
    getListUser(currentUser);
  }, [user]);
  useEffect(() => {
    listUsers &&
      listUsers.map((item) => {
        if (item.email === currentUser.email) {
          dispatch({ type: "CURRENT_USER", payload: item });
        }
      });
  }, [currentUser]);
  return (
    <UserSideStyle open={open}>
      <Navbar />
      <SearchForm />
      <ListChat setOpen={setOpen} data={listUsers} />
      <NewChatItem setOpen={setOpen} />
    </UserSideStyle>
  );
}

const UserSideStyle = styled.div`
  width: 420px;
  border-right: 1px solid #dfdada;
  @media only screen and (max-width: 770px) {
    border: none;
    width: 100%;
    ${(props) =>
      props.open &&
      css`
        display: none;
      `};
    ${(props) =>
      !props.open &&
      css`
        display: block;
      `};
  }
`;

export default UserSide;
