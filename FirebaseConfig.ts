// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0XGAHF3ttY_2uMAIn82TkMpesqjO2yzk",
  authDomain: "zg-data-ee9f7.firebaseapp.com",
  projectId: "zg-data-ee9f7",
  storageBucket: "zg-data-ee9f7.firebasestorage.app",
  messagingSenderId: "918455916742",
  appId: "1:918455916742:web:9ec08d283418c6cb661fc7",
  measurementId: "G-F6FVWLKCT3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
