import { useEffect, useContext } from "react";
// import { getRedirectResult } from "firebase/auth";
// import {
//   auth,
//   createUserDocumentFromAuth,
//   signInWithGooglePopup,
//   signInwithGoogleRedirect,
// } from "../../utility/firebase/firebase";
// import { Firestore } from "firebase/firestore";
// import { async } from "@firebase/util";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./Authentication.styles.scss";

function Authentication() {
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const { user } = await getRedirectResult(auth);
  //       if (!user) return;
  //       const userDocRef = await createUserDocumentFromAuth(user);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //     // const res = await getRedirectResult(auth);
  //   }
  //   fetchData();
  // }, []);

  return (
    <>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
}

export default Authentication;
