import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAMXwJnVrIP-MKUG6I_S9T1vzZfmZIkRoc",
  authDomain: "appcapsulas.firebaseapp.com",
  projectId: "appcapsulas",
  storageBucket: "appcapsulas.appspot.com",
  messagingSenderId: "25305929856",
  appId: "1:25305929856:web:d0e6c8aa29ea7e1d58ae65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)