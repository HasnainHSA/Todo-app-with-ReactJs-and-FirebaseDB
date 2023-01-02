import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
        apiKey: "AIzaSyCrE_MPTWdY72HEl7SnE9-JgJsL65qU-eE",
        authDomain: "react-todo-app-b3ff5.firebaseapp.com",
        projectId: "react-todo-app-b3ff5",
        storageBucket: "react-todo-app-b3ff5.appspot.com",
        messagingSenderId: "330345972383",
        appId: "1:330345972383:web:d370417c25e143e927d8aa",
        measurementId: "G-Z8282HTBE0"
     
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export { db };