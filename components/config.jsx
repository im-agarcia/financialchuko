// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvaGhSSbyLJn-9uFnls9Yarpu6aJa3_ck",
  authDomain: "crud-chuko-c83e9.firebaseapp.com",
  projectId: "crud-chuko-c83e9",
  storageBucket: "crud-chuko-c83e9.appspot.com",
  messagingSenderId: "1043981228117",
  appId: "1:1043981228117:web:952b26ee498956d8531cdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initilize
export const db = getFirestore(app)