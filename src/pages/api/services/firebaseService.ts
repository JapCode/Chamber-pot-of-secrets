// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import config from '../config';

const {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
} = config;

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
