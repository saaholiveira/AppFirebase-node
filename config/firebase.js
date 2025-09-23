import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAQXcDs-sjnO4fYj8mrD7BDZp6kPW5DGMo",
  authDomain: "jquery-firebase-4987e.firebaseapp.com",
  databaseURL: "https://jquery-firebase-4987e-default-rtdb.firebaseio.com",
  projectId: "jquery-firebase-4987e",
  storageBucket: "jquery-firebase-4987e.firebasestorage.app",
  messagingSenderId: "280908793283",
  appId: "1:280908793283:web:9b2e0de94c701c7b222976",
  measurementId: "G-743REKNCHQ"
};

// Evita reinicialização em hot-reload (nodemon)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getDatabase(app);