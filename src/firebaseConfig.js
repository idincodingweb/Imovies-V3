// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYmMWLLOiYHeZqI6TW4DFoaI7-W09rQCo",
  authDomain: "idincode-movies.firebaseapp.com",
  projectId: "idincode-movies",
  storageBucket: "idincode-movies.firebasestorage.app",
  messagingSenderId: "749717936022",
  appId: "1:749717936022:web:5548e5475d717501cdefb7",
  measurementId: "G-RXP14VZ8R2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Define and export logOutUser function
const logOutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully");
  } catch (error) {
    console.error("Error logging out: ", error);
  }
};

export { auth, logOutUser, onAuthStateChanged };