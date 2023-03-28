import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAnNOsE7lrXYNDF3tfZjoVSgjWpGgdXHxE",
    authDomain: "telescope-dd179.firebaseapp.com",
    projectId: "telescope-dd179",
    storageBucket: "telescope-dd179.appspot.com",
    messagingSenderId: "300895636011",
    appId: "1:300895636011:web:0486fdeaea27466337786e",
    measurementId: "G-MRPSZDXT9V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);