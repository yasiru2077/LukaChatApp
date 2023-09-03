
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAK5EDmhFj2TGZHQF2BQWvMbAqcq3ZkJeY",
  authDomain: "chat-ea535.firebaseapp.com",
  projectId: "chat-ea535",
  storageBucket: "chat-ea535.appspot.com",
  messagingSenderId: "477089972806",
  appId: "1:477089972806:web:230cf74a93a017b98b0047"
};

  

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();