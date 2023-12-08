import firebase from "firebase/app";
import "firebase/auth";
let app;
app =
  !firebase.apps.length &&
  firebase.initializeApp({
    apiKey: "AIzaSyD-cUa8H0rV9aeT_bMFUlPsWx5zGe5TBbo",
    authDomain: "uenareact.firebaseapp.com",
    projectId: "uenareact",
    storageBucket: "uenareact.appspot.com",
    messagingSenderId: "1046830238584",
    appId: "1:1046830238584:web:0b7b4b53bb9650977f168d",
    measurementId: "G-W86K7QM5P9",
  });
export const auth = app && app.auth();
export default app;
