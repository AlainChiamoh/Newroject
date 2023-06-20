// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArqpeWQJ9rKY0NsRUBozPxFQP4P2y5MWY",
  authDomain: "newroject-34ddb.firebaseapp.com",
  databaseURL: "https://newroject-34ddb-default-rtdb.firebaseio.com",
  projectId: "newroject-34ddb",
  storageBucket: "newroject-34ddb.appspot.com",
  messagingSenderId: "299406774478",
  appId: "1:299406774478:web:789dfd451f1b2be2cfc09f",
  measurementId: "G-X3XY5L4WPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)