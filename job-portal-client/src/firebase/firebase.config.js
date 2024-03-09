// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHgyW14e4hdYkJsohCBwnSdAs6V6rS_3Y",
  authDomain: "job-portal-demo-dc804.firebaseapp.com",
  projectId: "job-portal-demo-dc804",
  storageBucket: "job-portal-demo-dc804.appspot.com",
  messagingSenderId: "699645029396",
  appId: "1:699645029396:web:06f90cc6bd4eae455a4b01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app