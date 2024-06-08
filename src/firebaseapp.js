
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC1a4fXGNPRGqWYQVHtkSkOyRYdSnPs1S0",
  authDomain: "learnreact-fb730.firebaseapp.com",
  projectId: "learnreact-fb730",
  storageBucket: "learnreact-fb730.appspot.com",
  messagingSenderId: "558027578613",
  appId: "1:558027578613:web:c4be0c6807eaf4f48939bc",
  measurementId: "G-P9J5VWKLME",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//services
const auth = getAuth(app);
// const fireStore = getFirestore(app);

export default auth

