// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm0glUpXOwY_4FAB6Nli2gDLAKVq-DG6o",
  authDomain: "govschoolorgochem.firebaseapp.com",
  projectId: "govschoolorgochem",
  storageBucket: "govschoolorgochem.appspot.com",
  messagingSenderId: "116634700251",
  appId: "1:116634700251:web:f983750bfed0c70334fffe",
  measurementId: "G-B8HR1L08BH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
