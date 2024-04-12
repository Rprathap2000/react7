// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import store from "./Redux/store"
import { setUser,signOut } from "./Redux/store"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGbg9gQSqPH5K01IbXEX3qDQSoZXseLAI",
    authDomain: "react-demo-d0cfa.firebaseapp.com",
    projectId: "react-demo-d0cfa",
    storageBucket: "react-demo-d0cfa.appspot.com",
    messagingSenderId: "391682628186",
    appId: "1:391682628186:web:43933f30607fc13a7a5663"
  };
  
  // Initialize Firebase
  
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
onAuthStateChanged(auth,(user) =>
{
    if (user)
    {
        store.dispatch(setUser({
            email: user.email,
            password:user.password,
            
     }))   
    }
    else
    {
     store.dispatch(signOut())   
    }
})

