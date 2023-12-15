// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxnc-MArdMjvVsJjHdvsny15VkCme4eFI",
  authDomain: "react-2-milestone9.firebaseapp.com",
  projectId: "react-2-milestone9",
  storageBucket: "react-2-milestone9.appspot.com",
  messagingSenderId: "191374584291",
  appId: "1:191374584291:web:2c97fd17d9be4d0dc598d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;