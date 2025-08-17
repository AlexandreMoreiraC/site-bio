// Importações do Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBoZnbwnP2jGd_1IAd1HrW_HaaCBeBmvYU",
  authDomain: "marswebsites-14265.firebaseapp.com",
  projectId: "marswebsites-14265",
  storageBucket: "marswebsites-14265.appspot.com",
  messagingSenderId: "94958814720",
  appId: "1:94958814720:web:0bb9d464f62a82cb2f7ae5"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Auth e Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
