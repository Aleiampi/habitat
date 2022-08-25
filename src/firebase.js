// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKctLSAv5QpCe-7PJ8U28yRvLXZp2pzhE",
  authDomain: "habitat-80afb.firebaseapp.com",
  projectId: "habitat-80afb",
  storageBucket: "habitat-80afb.appspot.com",
  messagingSenderId: "710138929484",
  appId: "1:710138929484:web:74faee106112d4aecb6fe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore (app)