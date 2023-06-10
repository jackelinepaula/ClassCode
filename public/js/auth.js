
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
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            
            document.getElementById("authID").value = result.user.uid
            document.getElementById("authName").value = result._tokenResponse.fullName
            document.getElementById("authEmail").value = result._tokenResponse.email
            
            try {
                document.getElementById("authImg").value = result.user.photoURL
            } catch (error) {
                console.log(error);
            }

            form.submit()
    }).catch((error) => {
        console.error(error);
    });
})