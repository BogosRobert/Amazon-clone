import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyDX1GXJC6xgl4OD8xgVcaedjDAE04xa4ao",
    authDomain: "roro-8beb4.firebaseapp.com",
    databaseURL: "https://roro-8beb4.firebaseio.com",
    projectId: "roro-8beb4",
    storageBucket: "roro-8beb4.appspot.com",
    messagingSenderId: "985943362713",
    appId: "1:985943362713:web:4291185902b9e9074bbc08",
    measurementId: "G-XBE32HFQM1"
});

const auth = firebase.auth();

export { auth };