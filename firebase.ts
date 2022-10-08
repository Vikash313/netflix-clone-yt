// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4s9LXczOwni1d7Wwtc3LxXuoNp57tvm0",
  authDomain: "netflix-clone-yt-1b01a.firebaseapp.com",
  projectId: "netflix-clone-yt-1b01a",
  storageBucket: "netflix-clone-yt-1b01a.appspot.com",
  messagingSenderId: "362077882257",
  appId: "1:362077882257:web:4f0391903e24ebf651bc30",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };