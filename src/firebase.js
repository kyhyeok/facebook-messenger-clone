import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA5eaR8nCHCNy4WLFRch6mDFTU2WjKCnCo",
  authDomain: "facebook-messenger-clone-d4507.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-d4507.firebaseio.com",
  projectId: "facebook-messenger-clone-d4507",
  storageBucket: "facebook-messenger-clone-d4507.appspot.com",
  messagingSenderId: "361661845894",
  appId: "1:361661845894:web:6f61565f917bb21292dc07",
  measurementId: "G-ZEBT7P97QH"
});

const db = firebaseApp.firestore();

export default db;
