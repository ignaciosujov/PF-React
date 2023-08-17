// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBC_iV52Rn9E9nvJXGzUjr1C_ZFWSqzB70",
    authDomain: "tf-reactsujov.firebaseapp.com",
    projectId: "tf-reactsujov",
    storageBucket: "tf-reactsujov.appspot.com",
    messagingSenderId: "903670498068",
    appId: "1:903670498068:web:7dccc6264b5cb998ba3801"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const data = getFirestore(app)

export default data;