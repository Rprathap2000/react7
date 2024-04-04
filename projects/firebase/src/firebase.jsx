// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app"
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCJPXw6Z5ZJkXKy7d6IWz55vW7TcCQpe-w",
	authDomain: "react7-4e68e.firebaseapp.com",
	projectId: "react7-4e68e",
	storageBucket: "react7-4e68e.appspot.com",
	messagingSenderId: "1023741918226",
	appId: "1:1023741918226:web:72aeec9c4d7c28dfecaccb",
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const auth = firebase.auth();
export default firebaseConfig;