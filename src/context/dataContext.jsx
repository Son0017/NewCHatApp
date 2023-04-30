import React from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const DataContext = createContext();

function sortArray(array) {
  let myArray = array.sort((a, b) => b.time.secunds - a.time.secunds);
  return myArray;
}
function sortArray2(array) {
  let myArray;
  if (array.length > 1) {
    myArray = array.sort(
      (a, b) => b.newMes.time.secunds - a.newMes.time.secunds
    );
  } else {
    myArray = array;
  }
  return myArray;
}
const reducer = (state, action) => {
  switch (action.type) {
    case "GET_MESSAGES":
      return { ...state, listUsers: sortArray2(action.payload) };
    case "Messages":
      return { ...state, message: sortArray(action.payload) };
    default:
      return { ...state };
  }
};
const initState = {
  message: null,
  listUsers: null,
  searchUser: null,
  error: null,
};
const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <DataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

function dataContext() {
  return useContext(DataContext);
}

export { dataContext, DataProvider };
