import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCySIrYkvvhrZc7wxV4TST4FChRuSuyO-U",
    authDomain: "pro-71-365ef.firebaseapp.com",
    projectId: "pro-71-365ef",
    storageBucket: "pro-71-365ef.appspot.com",
    messagingSenderId: "493640799947",
    appId: "1:493640799947:web:c21e0f4e2ba8cd02646d4e"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
