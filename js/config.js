import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyAEqg9s5mI-Tcc2PHx2WC1KDGeaiBedB6A",
    authDomain: "smart-dustbin-386a3.firebaseapp.com",
    projectId: "smart-dustbin-386a3",
    storageBucket: "smart-dustbin-386a3.appspot.com",
    messagingSenderId: "157546211662",
    appId: "1:157546211662:web:dfa22bdbdad21cf77c561f",
    measurementId: "G-L256WWXNS2"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
