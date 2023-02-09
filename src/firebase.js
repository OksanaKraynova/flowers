import * as firebase from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPnSpd7lt6fx43Elec2ljdyH_MpvuS044",
  authDomain: "flowers-7f5e2.firebaseapp.com",
  projectId: "flowers-7f5e2",
  storageBucket: "flowers-7f5e2.appspot.com",
  messagingSenderId: "908222903221",
  appId: "1:908222903221:web:bddb7d97f6f3d3511c5ffc"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth()
export const provider = new GoogleAuthProvider();

export default db