// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA4TApxWj2sQyVHFPs572pcFbWuI2BLAKg',
  authDomain: 'fashion-website-d24b5.firebaseapp.com',
  projectId: 'fashion-website-d24b5',
  storageBucket: 'fashion-website-d24b5.appspot.com',
  messagingSenderId: '74078377538',
  appId: '1:74078377538:web:a139d94024f96791d77fdb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };
