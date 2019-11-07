import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyC2kWjkSWZIzf_EqsIfgFwYwA-ZdYqzkUY",
  authDomain: "crwn-db-4a915.firebaseapp.com",
  databaseURL: "https://crwn-db-4a915.firebaseio.com",
  projectId: "crwn-db-4a915",
  storageBucket: "crwn-db-4a915.appspot.com",
  messagingSenderId: "608375921479",
  appId: "1:608375921479:web:db59367f3841338e06ca62",
  measurementId: "G-98KXMS8NRP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;