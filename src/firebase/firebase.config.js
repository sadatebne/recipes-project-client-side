// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLaECuzILhTbKaOEj9GFdbiEvAV79vXxA",
  authDomain: "recipes-react-web.firebaseapp.com",
  projectId: "recipes-react-web",
  storageBucket: "recipes-react-web.appspot.com",
  messagingSenderId: "215080551231",
  appId: "1:215080551231:web:6050c1dda1175a30be098a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;