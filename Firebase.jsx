// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBp_8HtMKxCAk8RYWJwQiLxPwa3mSR5zJE",
  authDomain: "devlinks-a259a.firebaseapp.com",
  projectId: "devlinks-a259a",
  storageBucket: "devlinks-a259a.appspot.com",
  messagingSenderId: "87315963476",
  appId: "1:87315963476:web:a111f806b468225aa897c1",
  measurementId: "G-EB49Y1Y7GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export default auth