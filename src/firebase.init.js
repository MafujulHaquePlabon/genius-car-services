
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHCekaOmeh4LtbOjF6s267BuJf_Hh_RpU",
  authDomain: "genius-car-services-8a84e.firebaseapp.com",
  projectId: "genius-car-services-8a84e",
  storageBucket: "genius-car-services-8a84e.appspot.com",
  messagingSenderId: "498211602474",
  appId: "1:498211602474:web:1196e52ce5a502b12e0353"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;