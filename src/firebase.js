// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw7CtPGWUSeZzRf3KTyL8AkL3dB2pZkq8",
  authDomain: "chat-app-65579.firebaseapp.com",
  projectId: "chat-app-65579",
  storageBucket: "chat-app-65579.appspot.com",
  messagingSenderId: "551501016762",
  appId: "1:551501016762:web:c565306a8f5c3870101c83",
  measurementId: "G-JH1PVGGR5K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();