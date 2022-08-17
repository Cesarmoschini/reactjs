import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD347_g2z0vf9CDmyB0OBVrQgDj0tp1mSU",
  authDomain: "backendappcapsulas.firebaseapp.com",
  projectId: "backendappcapsulas",
  storageBucket: "backendappcapsulas.appspot.com",
  messagingSenderId: "620764396171",
  appId: "1:620764396171:web:7d646c82689af4fef2728e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)





