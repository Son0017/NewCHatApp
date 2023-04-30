// import React from "react";
import { useEffect } from "react";
import { userDataContext } from "../context/userDataContext";
import {
  setDoc,
  db,
  doc,
  onSnapshot,
  collection,
} from "../firebase/useFirebaseConfig";
function useUserData() {
  const { dispatch } = userDataContext();
  const addUser = async (data) => {
    await setDoc(doc(db, "users", `${data.nickname}`), {
      ...data,
    });
  };
  const getUsers = () => {
    try {
      onSnapshot(collection(db, "users"), (querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          users.push(doc.data());
        });
        dispatch({ type: "GET_USERS", payload: users });
      });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err });
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return { addUser };
}

export default useUserData;
