import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBwN18jKxabtPI02smWi3PmLJj_H7egJOk",
  authDomain: "stadiumcovtracker.firebaseapp.com",
  projectId: "stadiumcovtracker",
  storageBucket: "stadiumcovtracker.appspot.com",
  messagingSenderId: "880577733543",
  appId: "1:880577733543:web:7778931e54eebf3ec84c82"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {
db,auth,}

