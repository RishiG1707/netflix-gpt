// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAHolVRrFV9zeLExUk3kbf30Wh5Ru0o93c",
	authDomain: "netflixgpt-b4be8.firebaseapp.com",
	projectId: "netflixgpt-b4be8",
	storageBucket: "netflixgpt-b4be8.firebasestorage.app",
	messagingSenderId: "138924749884",
	appId: "1:138924749884:web:4e0eacf166ac2842a7bf39",
	measurementId: "G-2RY3VL902M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

