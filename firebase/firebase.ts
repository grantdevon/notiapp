// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpSAOIcaF5hnxvZ6uALXO24rmns2-o32c",
  authDomain: "noti-app-8ba42.firebaseapp.com",
  projectId: "noti-app-8ba42",
  storageBucket: "noti-app-8ba42.appspot.com",
  messagingSenderId: "854161784577",
  appId: "1:854161784577:web:1145c39af7fcae0d1c6500",
  measurementId: "G-L17JP15X65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);



