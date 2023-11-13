// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl_FftsCJCyANJw99vC9pc_INwCSprYJQ",
  authDomain: "sih2023-d8fc1.firebaseapp.com",
  projectId: "sih2023-d8fc1",
  storageBucket: "sih2023-d8fc1.appspot.com",
  messagingSenderId: "294629054772",
  appId: "1:294629054772:web:9e5ece1d2d7a800a4a6d61",
  measurementId: "G-K55X8WQFQ5"
};

// Initialize Firebase
let app;
 app = firebase.initializeApp(firebaseConfig);
 const auth=firebase.auth();
 export { auth };
const analytics = getAnalytics(app);
