// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCiPGjXgi2Um-VfnNjUvtX16TvjA7mMUyI',
  authDomain: 'fashion-website-ce94e.firebaseapp.com',
  projectId: 'fashion-website-ce94e',
  storageBucket: 'fashion-website-ce94e.appspot.com',
  messagingSenderId: '344606167151',
  appId: '1:344606167151:web:1da49bd4646fd381f5bd9a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firebase auth
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
