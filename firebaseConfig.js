import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyA3ds65DiEbtIacmbkl-lm2QirvC3RNhYk',
  authDomain: 'app-action-day.firebaseapp.com',
  databaseURL: 'https://app-action-day.firebaseio.com',
  projectId: 'app-action-day',
  storageBucket: 'app-action-day.appspot.com',
  messagingSenderId: '883278311210',
  appId: '1:883278311210:web:796ff8ad5b8bba0d7a7853',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

