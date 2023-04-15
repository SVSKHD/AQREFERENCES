import * as firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAIqwQAzounicAUHH5JEt-erjgRL_yj0F4",
    authDomain: "aq-ecom.firebaseapp.com",
    projectId: "aq-ecom",
    storageBucket: "aq-ecom.appspot.com",
    messagingSenderId: "728481329129",
    appId: "1:728481329129:web:43a09fdf2fb4d32de3a578",
    measurementId: "G-7KVP4LN1ZB"
  };


firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
