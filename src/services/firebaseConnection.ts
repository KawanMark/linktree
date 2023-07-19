

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsYKndMkkW6j5U0B1Q8M2fYKacaJoKGfE",
    authDomain: "reactlinks-6be94.firebaseapp.com",
    projectId: "reactlinks-6be94",
    storageBucket: "reactlinks-6be94.appspot.com",
    messagingSenderId: "1024674912821",
    appId: "1:1024674912821:web:9ae8dc0b24ee4f14e76f7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db } 