// Import the functions you need from the SDKs you need
import { Alert } from "@mui/material";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKX6lonEh4LdSWxjZY_MT8j6PQgyo3MHs",
  authDomain: "dts-movie.firebaseapp.com",
  projectId: "dts-movie",
  storageBucket: "dts-movie.appspot.com",
  messagingSenderId: "981995330858",
  appId: "1:981995330858:web:3f92462260ee56204b5253",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signUpreq = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("berhasil");
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

const signOutReq = async () => {
  try {
    await signOut(auth);
    console.log("berhasil log out");
  } catch (err) {
    console.log(err);
    console.log("gagal log out");
    return err;
  }
};
const signInReq = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredential.user;
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};
export const baseUrlForMovie = "https://image.tmdb.org/t/p";
export { auth, signUpreq, signOutReq, signInReq };
