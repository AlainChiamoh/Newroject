// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import {getFirestore} from 'firebase/'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJd9xLLY3Q2xhowgrUGm-SpnDGoY02po4",
  authDomain: "newproject-ed6c5.firebaseapp.com",
  projectId: "newproject-ed6c5",
  storageBucket: "newproject-ed6c5.appspot.com",
  messagingSenderId: "653991066389",
  appId: "1:653991066389:web:5066a3a904fe16e92ac71c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//export const db = getFirestore(app);
