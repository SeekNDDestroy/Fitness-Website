// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
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

// sign users up
const signupForm = document.querySelector('.signup')
      signupForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const email = signupForm.emails.value
        const password = signupForm.passwords.value
        createUserWithEmailAndPassword(auth, email, password)
          .then((cred) => {
            // console.log("user created:",cred.user)
            signupForm.reset()
          })
          .catch((err) => {
            alert(err.message)
          })
      })

// function checkpassword() {
//   let passw = document.getElementById("passw").value;

//   let rpass = document.getElementById("rpass").value;
//   console.log(passw, rpass);
//   let message = document.getElementById('message');
//   if (passw != 0) {
//     if (passw == rpass) {
//       message.textContent = "Password match";
//       message.style.color = "green";
//       
//     }
//     else {
//       message.textContent = "Password don't match plz try again"
//       message.style.color = "red";
//     }
//   }
//   else {
//     alert("password can't be empty")
//   }
// }

gp.addEventListener('click', (e) => {
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
      alert(errorMessage, errorCode)
    });

})

// sign existing users
const loginForm = document.querySelector('.signin')
loginForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = loginForm.email.value
  const password = loginForm.password.value
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // console.log('User logged in',user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
})

const logout = document.querySelector('.Logout')
logout.addEventListener('click',()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("signed out")
  }).catch((error) => {
    // An error happened.
    console.log(error.message)
  });
})

onAuthStateChanged(auth, (user) => {
  console.log('User status changed:', user)
})