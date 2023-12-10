// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzymJa8Qx7Q9m2RDooKbmILqs-5QxkP8o",
  authDomain: "parapharmacy-dbe7f.firebaseapp.com",
  projectId: "parapharmacy-dbe7f",
  storageBucket: "parapharmacy-dbe7f.appspot.com",
  messagingSenderId: "436491590682",
  appId: "1:436491590682:web:f81b89b4b68b4fd5d245a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)