import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utility/firebase/firebase";

function Signin() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // const result = await res.json();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <>
      <h1>SIGN IN PAGE</h1>
      <button onClick={logGoogleUser}>SIGN IN WITH GOOGLE</button>
    </>
  );
}

export default Signin;
