// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh2QSx93VYkbAP5fquetq2B9ZCXcChCAs",
  authDomain: "bangle-dish.firebaseapp.com",
  projectId: "bangle-dish",
  storageBucket: "bangle-dish.appspot.com",
  messagingSenderId: "519856115423",
  appId: "1:519856115423:web:6af8797ae55f3c05e2a36a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
