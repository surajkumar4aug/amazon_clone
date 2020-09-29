// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyB8I7laoKJEYTSoniUL4ZoAro1cxDwA338",
    authDomain: "clone-9ce88.firebaseapp.com",
    databaseURL: "https://clone-9ce88.firebaseio.com",
    projectId: "clone-9ce88",
    storageBucket: "clone-9ce88.appspot.com",
    messagingSenderId: "186912540198",
    appId: "1:186912540198:web:4e67e7200da03b1ce7c8e7",
    measurementId: "G-XP3CJ1LJVW"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};
