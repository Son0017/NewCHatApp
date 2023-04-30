import {
  setDoc,
  db,
  doc,
  onSnapshot,
  collection,
  deleteDoc,
  addDoc,
  getDocs,
  updateDoc,
  query,
} from "../firebase/useFirebaseConfig";
import { useAuth0 } from "@auth0/auth0-react";
import { dataContext } from "../context/dataContext";

function useData() {
  const { user } = useAuth0();
  const { dispatch } = dataContext();
  const sendMessage = async (currentUser, data) => {
    try {
      addDoc(
        collection(doc(db, currentUser.nickname, user.nickname), "message"),
        {
          ...data,
          from: user.nickname,
        }
      );
      addDoc(
        collection(doc(db, user.nickname, currentUser.nickname), "message"),
        {
          ...data,
          from: user.nickname,
        }
      );
    } catch (err) {
      console.error(err);
    }
  };
  const addListChat = async (currentUser, data) => {
    try {
      await setDoc(doc(db, user.nickname, `${currentUser.nickname}`), {
        ...currentUser,
        newMes: { ...data, new: false, amount: 0 },
      });
      await setDoc(doc(db, currentUser.nickname, `${user.nickname}`), {
        ...user,
        newMes: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getListUser = () => {
    try {
      if (user) {
        onSnapshot(collection(db, `${user.nickname}`), (querySnapshot) => {
          const users = [];
          querySnapshot.forEach((doc) => {
            users.push(doc.data());
          });
          dispatch({ type: "GET_MESSAGES", payload: users });
        });
      }
    } catch (err) {
      dispatch({ type: "ERROR", payload: err });
    }
  };
  const updateMes = async (currentUser, data) => {
    try {
      const washingtonRef = doc(
        db,
        `${user.nickname}`,
        `${currentUser.nickname}`
      );
      await updateDoc(washingtonRef, {
        newMes: { ...data, new: false },
      });
    } catch (err) {
      console.error(err);
    }
  };
  const getMessages = (currentUser) => {
    try {
      onSnapshot(
        collection(
          db,
          `${user.nickname}`,
          `${currentUser.nickname}`,
          "message"
        ),
        (querySnapshot) => {
          const messages = [];
          querySnapshot.forEach((doc) => {
            messages.push({ ...doc.data(), id: doc.id });
          });
          dispatch({ type: "Messages", payload: messages });
        }
      );
    } catch (err) {
      console.error(err);
    }
  };
  const deleteChat = async (currentUser) => {
    await deleteDoc(doc(db, `${user.nickname}`, `${currentUser.nickname}`));
    const q = query(
      collection(db, `${user.nickname}`, `${currentUser.nickname}`, "message")
    );
    const querySnapshot = await getDocs(q);
    const deleteOps = [];
    querySnapshot.forEach((doc) => {
      deleteOps.push(deleteDoc(doc.ref));
    });
  };
  return {
    sendMessage,
    addListChat,
    getListUser,
    getMessages,
    updateMes,
    deleteChat,
  };
}

export default useData;
