
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js'
import { getAuth , signInWithPopup , GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';

import firebaseConfig from './env.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const form = document.getElementById("google-autentication")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;

            console.log(token);

            document.getElementById("authID").value = result.user.uid
            document.getElementById("authName").value = result._tokenResponse.fullName
            document.getElementById("authEmail").value = result._tokenResponse.email

            form.submit()
    }).catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
})

function login() {
    
}