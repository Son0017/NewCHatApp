import React from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const UserContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "OPEN":
      return { ...state, newChat: true };
    case "CLOSE":
      return { ...state, newChat: false };
    case "CURRENT_USER":
      return { ...state, currentUser: action.payload };
    case "ERROR":
      return {
        users: null,
        currentUser: null,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};
const initState = {
  users: null,
  currentUser: null,
  error: null,
  newChat: false,
};
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

function userDataContext() {
  return useContext(UserContext);
}

export { userDataContext, UserProvider };
