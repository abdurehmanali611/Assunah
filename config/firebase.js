// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { EXPO_API_KEY, 
  EXPO_AUTH_DOMAIN, 
  EXPO_PROJECT_ID, 
  EXPO_STORAGE_BUCKET, 
  EXPO_MESSAGING_SENDER_ID, 
  EXPO_APP_ID 
       } from "@env"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: `${EXPO_API_KEY}`,
  authDomain: `${EXPO_AUTH_DOMAIN}`,
  projectId: `${EXPO_PROJECT_ID}`,
  storageBucket: `${EXPO_STORAGE_BUCKET}`,
  messagingSenderId: `${EXPO_MESSAGING_SENDER_ID}`,
  appId: `${EXPO_APP_ID}`
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const database = getFirestore()
export const auth = getAuth()
