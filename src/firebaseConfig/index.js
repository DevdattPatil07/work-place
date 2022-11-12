// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZUDyfk0x05mzagCvQ0eogjmvu1bGywUk",
  authDomain: "work-place-21139.firebaseapp.com",
  projectId: "work-place-21139",
  storageBucket: "work-place-21139.appspot.com",
  messagingSenderId: "879412014383",
  appId: "1:879412014383:web:e9d7c663ab2ef5e0da85da",
  measurementId: "G-B53Q3HNPLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);