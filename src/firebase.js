import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCq6-FaOR9brA7XDkp9TWT1SN4Y7mKAIbk",
  authDomain: "e-commerce-dfc07.firebaseapp.com",
  projectId: "e-commerce-dfc07",
  storageBucket: "e-commerce-dfc07.appspot.com",
  messagingSenderId: "577610208372",
  appId: "1:577610208372:web:8354ee52e3da7ac333ed21"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export default app;