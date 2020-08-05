import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA1ABsB5mJJvPhT6gwNGrHhBbh7btN2bNQ",
  authDomain: "shopping-cart-dc174.firebaseapp.com",
  databaseURL: "https://shopping-cart-dc174.firebaseio.com",
  projectId: "shopping-cart-dc174",
  storageBucket: "shopping-cart-dc174.appspot.com",
  messagingSenderId: "901724923519",
  appId: "1:901724923519:web:2ba30c80c636309179014a",
  measurementId: "G-V46LER8NNW"
});

const db=firebaseApp.firestore();
const auth=firebase.auth();
export {db,auth};
