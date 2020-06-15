import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyClVNvhHDza_srxfKGaaLmmCQqAXLRz0Yg",
  authDomain: "meals-app-ad260.firebaseapp.com",
  databaseURL: "https://meals-app-ad260.firebaseio.com",
  projectId: "meals-app-ad260",
  storageBucket: "meals-app-ad260.appspot.com",
  messagingSenderId: "984186680788",
  appId: "1:984186680788:web:83bef587583ae362d29241",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
