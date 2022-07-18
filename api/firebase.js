import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
// import {firebaseConfig} from "./keys";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE,
  messagingSenderId: process.env.NEXT_PUBLIC_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const  app = initializeApp(firebaseConfig)
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true, // this line
  useFetchStreams: false, // and this line
})
 export {db}