import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyD-kQu69OU7lj4D-dE4dg2Fnn1w0YDEr8I",
  authDomain: "omniplex-d211f.firebaseapp.com",
  projectId: "omniplex-d211f",
  storageBucket: "omniplex-d211f.firebasestorage.app",
  messagingSenderId: "61047594123",
  appId: "1:61047594123:web:0ae7763f9f3b7c1ee7c88e",
  measurementId: "G-K44PXK4BKR"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};

