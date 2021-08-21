import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCX8yyPVyhqGre373i60YMrsiFSMyt4Pgc",
  authDomain: "trustscout-samuel.firebaseapp.com",
  projectId: "trustscout-samuel",
  databaseURL: "https://trustscout-samuel-default-rtdb.firebaseio.com",
  storageBucket: "trustscout-samuel.appspot.com",
  messagingSenderId: "559043329484",
  appId: "1:559043329484:web:be83fe3f264d14ea65f169",
};

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.database();

export { auth, db };
