import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD6BMkn3TyPfbPiBLm5VDUh5I-liUXqygU",
  authDomain: "crownappdb.firebaseapp.com",
  databaseURL: "https://crownappdb.firebaseio.com",
  projectId: "crownappdb",
  storageBucket: "crownappdb.appspot.com",
  messagingSenderId: "509299224353",
  appId: "1:509299224353:web:bc4be368fe59db61ac9860",
  measurementId: "G-2ENVW8YVLM"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
