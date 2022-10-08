import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDXSfp9kCIrNj7d_LDy752xQJhTjAJCL_w",
  authDomain: "ecommerce-adiestramiento.firebaseapp.com",
  projectId: "ecommerce-adiestramiento",
  storageBucket: "ecommerce-adiestramiento.appspot.com",
  messagingSenderId: "1036192249316",
  appId: "1:1036192249316:web:e2a87a866a952a5eff03f1"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)