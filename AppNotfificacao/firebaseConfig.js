// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWk2xofxEiIrnI9nuhsN-r_taxVQIq_xo",
    authDomain: "meuprojeto-vzx.firebaseapp.com",
    projectId: "meuprojeto-vzx",
    storageBucket: "meuprojeto-vzx.appspot.com",
    messagingSenderId: "398336478787",
    appId: "1:398336478787:web:2d805d623fc87627494ef6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const firestore = getFirestore(app);

export { auth, firestore };
