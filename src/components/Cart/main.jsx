import React from "react";
import { ReactDOM } from 'react-dom/client';
import App from '../../App'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDfvd42X862QDVwfndlOyM21qiWvNxVOQ",
  authDomain: "todorojo-df9cd.firebaseapp.com",
  projectId: "todorojo-df9cd",
  storageBucket: "todorojo-df9cd.appspot.com",
  messagingSenderId: "401218816064",
  appId: "1:401218816064:web:764dc3f4c4672635e7b7a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)