import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Sustituye con las credenciales de tu consola de Firebase si difieren
const firebaseConfig = {
  apiKey: "AIzaSyBYDOF2KG49zvJRN_ODroyqzlp3IcVuAeg",
  authDomain: "monitoreo-de-sensores-iot.firebaseapp.com",
  databaseURL: "https://monitoreo-de-sensores-iot-default-rtdb.firebaseio.com",
  projectId: "monitoreo-de-sensores-iot",
  storageBucket: "monitoreo-de-sensores-iot.firebasestorage.app",
  messagingSenderId: "965071760685",
  appId: "1:965071760685:web:41cc6addc7d6141c0937a4"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);