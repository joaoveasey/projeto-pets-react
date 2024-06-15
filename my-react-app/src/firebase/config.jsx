import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZwRkxZ7lH-Ah05p60uE61UUuJWyuGPyU",
  authDomain: "projeto-pets-conexao-canina.firebaseapp.com",
  projectId: "projeto-pets-conexao-canina",
  storageBucket: "projeto-pets-conexao-canina.appspot.com",
  messagingSenderId: "125931574893",
  appId: "1:125931574893:web:2c7721a92efd9852129164",
  measurementId: "G-D95ZZ8P0RS"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage, db, app };
