import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInwithGoogleRedirect,
} from "../../utility/firebase/firebase";
import { Firestore } from "firebase/firestore";
import { async } from "@firebase/util";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

function Signin() {
  useEffect(() => {
    async function fetchData() {
      try {
        const { user } = await getRedirectResult(auth);
        if (!user) return;
        const userDocRef = await createUserDocumentFromAuth(user);
      } catch (err) {
        console.log(err);
      }
      // const res = await getRedirectResult(auth);
    }
    fetchData();
  }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>SIGN IN PAGE</h1>
      <button onClick={logGoogleUser}>SIGN IN WITH GOOGLE</button>
      <button onClick={signInwithGoogleRedirect}>
        SIGN IN WITH GOOGLE REDIRECT
      </button>
      <SignUpForm />
    </>
  );
}

export default Signin;
