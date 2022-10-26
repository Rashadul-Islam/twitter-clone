import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSMbSZMB-85bsI3x2N1YV55vYx9INyddI",
  authDomain: "twitter-clone-4f3d4.firebaseapp.com",
  projectId: "twitter-clone-4f3d4",
  storageBucket: "twitter-clone-4f3d4.appspot.com",
  messagingSenderId: "406325950535",
  appId: "1:406325950535:web:35fdc3aeacfc964d4ad962",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };