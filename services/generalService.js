// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    collection,
    getFirestore,
    addDoc,
} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBAG5Iowe_jtVqiZj-gBEpyn7mGMrzHDr4",
    authDomain: "kreed-91869.firebaseapp.com",
    projectId: "kreed-91869",
    storageBucket: "kreed-91869.firebasestorage.app",
    messagingSenderId: "976880098973",
    appId: "1:976880098973:web:be2fa090a23592783ebe74",
    measurementId: "G-6PLT9K7JTF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const addToWaitlistDatabase = async ({ username, email }) => {
    try {
        const docRef = await addDoc(collection(db, "waitListUsers"), {
            name: username,
            email: email,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

export {
    db,
    addToWaitlistDatabase,
};