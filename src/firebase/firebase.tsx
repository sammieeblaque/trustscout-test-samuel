import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC0CP07yqkuAZter7Q6rmzN_-_v09ybLd4",
  authDomain: "trustscout-samuel-4da7d.firebaseapp.com",
  databaseURL: "https://trustscout-samuel-4da7d-default-rtdb.firebaseio.com",
  projectId: "trustscout-samuel-4da7d",
  storageBucket: "trustscout-samuel-4da7d.appspot.com",
  messagingSenderId: "118709324804",
  appId: "1:118709324804:web:1bc09b497acb2615d8b951",
};

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.database();

export { auth, db };
