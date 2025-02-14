import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXkAjgTUIR_2E07aCclUYSK9m8fKHT1bQ",
  authDomain: "blogapp-1597e.firebaseapp.com",
  projectId: "blogapp-1597e",
  storageBucket: "blogapp-1597e.firebasestorage.app",
  messagingSenderId: "86505316163",
  appId: "1:86505316163:web:49dfdf35a9c56aab1019f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider();
