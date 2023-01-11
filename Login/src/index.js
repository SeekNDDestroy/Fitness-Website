// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO4WXYB58FNa5J8Qmt1heFnr8JFIqSI64",
  authDomain: "fitness-project-2241b.firebaseapp.com",
  projectId: "fitness-project-2241b",
  storageBucket: "fitness-project-2241b.appspot.com",
  messagingSenderId: "654830982765",
  appId: "1:654830982765:web:65e92d46dd195d97541164",
  measurementId: "G-J017MKBZ9R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

//sign users up
// const signupForm = document.querySelector('.signup')
// signupForm.addEventListener('submit',(e)=>{
//   e.preventDefault()
//   const email = signupForm.email.value
//   const password = signupForm.password.value
//   createUserWithEmailAndPassword(auth,email,password)
//   .then((cred)=>{
//     console.log("user created:",cred.user)
//     signupForm.reset()
//   })
//   .catch((err)=>{
//     console.log(err.message)
//   })
// })


login.addEventListener('click',(e)=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    alert(user.displayName);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    alert(errorMessage)
  });

})

// logout.addEventListener('click',(e)=>{
//   signOut(auth).then(() => {
//     // Sign-out successful.
//     console.log("signed out")
//   }).catch((error) => {
//     // An error happened.
//     console.log(error.message)
//   });
// })