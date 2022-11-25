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
  apiKey: "AIzaSyD5di4BPSd1C35gjmpjVKhw385yaXPh3rQ",
  authDomain: "parking-cbbe4.firebaseapp.com",
  projectId: "parking-cbbe4",
  storageBucket: "parking-cbbe4.appspot.com",
  messagingSenderId: "875004747329",
  appId: "1:875004747329:web:c74cd91d48e5f8345b30c0",
  measurementId: "G-2WDSNKHJX6"
};

// Initialize Firebase
let app;
 app = firebase.initializeApp(firebaseConfig);
 const auth=firebase.auth();
 export { auth };
const analytics = getAnalytics(app);
