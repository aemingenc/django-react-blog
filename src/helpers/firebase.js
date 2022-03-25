import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAaC-9laPAGHJNl0XcYTji6aEHTag0cZrU",
    authDomain: "fire-blog-c2818.firebaseapp.com",
    databaseURL: "https://fire-blog-c2818-default-rtdb.firebaseio.com",
    projectId: "fire-blog-c2818",
    storageBucket: "fire-blog-c2818.appspot.com",
    messagingSenderId: "573525322419",
    appId: "1:573525322419:web:07cfbe6459463fc871dec6"
  };
//Firebase başlatmak için initializeAPP KULLANDIK VE FİREBASEDEN İMPORT ETTİK
  const firebase = initializeApp(firebaseConfig);

  export default firebase;
  export const auth =getAuth(firebase);