import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  signInWithRedirect,
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAQhDdrp5u2lHtmvnb1qVNk7Y5Yr0uRdo0",
  authDomain: "crwn-shopping-750c2.firebaseapp.com",
  projectId: "crwn-shopping-750c2",
  storageBucket: "crwn-shopping-750c2.appspot.com",
  messagingSenderId: "134774024809",
  appId: "1:134774024809:web:8d62ea11691c00120d10f8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInwithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async function (
  userAuth,
  additionalInformation = {}
) {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(`Error Creating ${error} `);
    }
  }

  return userDocRef;
};

export const createAuthUserFromEmailAndPassword = async function (
  email,
  password
) {
  console.log(email, password);
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const SignInOldUser = async function (email, password) {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
