import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  getFirestore,
  setDoc,
  updateDoc,
  doc,
  query,
  where,
  getDoc,
  onSnapshot,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBD-1JgCy6pEDo3YcA_c0bUALPLOQgCXOk",
  authDomain: "chat-cf18a.firebaseapp.com",
  projectId: "chat-cf18a",
  storageBucket: "chat-cf18a.appspot.com",
  messagingSenderId: "488442759741",
  appId: "1:488442759741:web:e99171de139dc9d0953854",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  addDoc,
  setDoc,
  updateDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
  getDocs,
  deleteDoc,
};
