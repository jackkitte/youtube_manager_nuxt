import firebase from "firebase/app";
import "firebase/auth";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAw-QsQjOpaJm1qQtIEj-aSNrIA5_TJKuM",
    authDomain: "manager-9c70d.firebaseapp.com",
    databaseURL: "https://manager-9c70d.firebaseio.com",
    projectId: "manager-9c70d",
    storageBucket: "manager-9c70d.appspot.com",
    messagingSenderId: "716724052449",
    appId: "1:716724052449:web:348c9a6782fa3719d3b2a0"
  })
}

export default firebase;
