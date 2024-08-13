// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbJOyl4O5ShqboqzsSWX3njdELVC6azDM",
    authDomain: "netflixgpt-clone-e7fad.firebaseapp.com",
    projectId: "netflixgpt-clone-e7fad",
    storageBucket: "netflixgpt-clone-e7fad.appspot.com",
    messagingSenderId: "942899575450",
    appId: "1:942899575450:web:20f5bae6ef325a51f47d23",
    measurementId: "G-9X5E02SF4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




export const auth = getAuth();