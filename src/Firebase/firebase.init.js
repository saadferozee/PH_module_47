// <-- Copied from Firebase Console --> 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQ7sgu2PyM1V6QUBQVTUmWas_A2INxM7k",
    authDomain: "module-47-testing.firebaseapp.com",
    projectId: "module-47-testing",
    storageBucket: "module-47-testing.firebasestorage.app",
    messagingSenderId: "381088972079",
    appId: "1:381088972079:web:6a8958083e5eecca1b75da",
    measurementId: "G-H6NNWN400F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);