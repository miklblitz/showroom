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

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;