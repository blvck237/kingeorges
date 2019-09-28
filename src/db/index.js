import firebase from "firebase";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyAotALjGQaaMufKG98VFUfyk7RUXGNWyds",
  authDomain: "king-geor.firebaseapp.com",
  databaseURL: "https://king-geor.firebaseio.com",
  projectId: "king-geor",
  storageBucket: "king-geor.appspot.com",
  messagingSenderId: "479648737810"
});

const db = firebase.firestore();
const auth = firebase.auth();

db.settings({ timestampsInSnapshots: true });

export { db, auth };
