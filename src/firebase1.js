// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAwbHZCDXb-GReH70KL2-BrKBLZuME5-XU",
    authDomain: "slack-clone-eb6d9.firebaseapp.com",
    projectId: "slack-clone-eb6d9",
    storageBucket: "slack-clone-eb6d9.appspot.com",
    messagingSenderId: "878375495063",
    appId: "1:878375495063:web:8fa7ec2aa06b5a1f2d90d2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider};