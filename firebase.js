import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //import the auth module
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCQZsI3r_8FrrjMEpmkLbTToyf0ZH3leBk",
  authDomain: "infinity-app-9b8b6.firebaseapp.com",
  projectId: "infinity-app-9b8b6",
  storageBucket: "infinity-app-9b8b6.appspot.com",
  messagingSenderId: "970272418257",
  appId: "1:970272418257:web:209b22bfd10166639518f0",
};

const app = initializeApp(firebaseConfig);

// firestore db
export const db = getFirestore();

export const authentication = getAuth(app);
