import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBZCvzB_StvGdgzMp9JyJ-r5k_JxSoYHn0",
    authDomain: "evernote-app-54db0.firebaseapp.com",
    projectId: "evernote-app-54db0",
    storageBucket: "evernote-app-54db0.appspot.com",
    messagingSenderId: "1059032714627",
    appId: "1:1059032714627:web:a7ff6ffebffda983097ab6"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
  
export {db}