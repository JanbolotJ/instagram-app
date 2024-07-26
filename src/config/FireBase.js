
import { initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA86nfGIc_SL638vK-1le8yuJuf5gZ8vNc",
  authDomain: "instagram-370d8.firebaseapp.com",
  projectId: "instagram-370d8",
  storageBucket: "instagram-370d8.appspot.com",
  messagingSenderId: "83320880500",
  appId: "1:83320880500:web:4c6c4ee4275d2cc5530021"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)




