// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClfWhVDltjTrLS4iTvXsxpJMLngPE_TTk",
  authDomain: "netflixgpt-fe86f.firebaseapp.com",
  projectId: "netflixgpt-fe86f",
  storageBucket: "netflixgpt-fe86f.appspot.com",
  messagingSenderId: "662727963238",
  appId: "1:662727963238:web:e740ea41e199e6b99f33a7",
  measurementId: "G-NWCJLWE511"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();