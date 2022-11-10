// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCamA1kE-NSVKDheYzjBG7aHrhzKVv5wDs",
  authDomain: "pos-puc-front.firebaseapp.com",
  projectId: "pos-puc-front",
  storageBucket: "pos-puc-front.appspot.com",
  messagingSenderId: "925232065238",
  appId: "1:925232065238:web:9d7583a5c177456335b777",
  measurementId: "G-Q4Q2FE9HJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);