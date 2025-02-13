
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAm0ByDge5f20KrpFjOiltSeWfvF5m65t4",
  authDomain: "react-notes-f285d.firebaseapp.com",
  projectId: "react-notes-f285d",
  storageBucket: "react-notes-f285d.firebasestorage.app",
  messagingSenderId: "449346656051",
  appId: "1:449346656051:web:ee6249fc4fd5f948575046"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")