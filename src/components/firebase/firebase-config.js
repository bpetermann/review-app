import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAz6WYMxlO_ddj7vLEDEjewyznkeY6iwNk',
  authDomain: 'review-app-b2245.firebaseapp.com',
  databaseURL: 'https://review-app-b2245-default-rtdb.firebaseio.com',
  projectId: 'review-app-b2245',
  storageBucket: 'review-app-b2245.appspot.com',
  messagingSenderId: '804164741332',
  appId: '1:804164741332:web:b2204f17564631f1b5f341',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
