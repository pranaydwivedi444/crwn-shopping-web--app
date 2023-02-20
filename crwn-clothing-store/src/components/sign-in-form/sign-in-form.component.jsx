import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  createUserDocumentFromAuth,
  SignInOldUser,
  signInWithGooglePopup,
} from "../../utility/firebase/firebase";
import { UserContext } from "../../contexts/user.context";
const defaultFormFields = {
  email: "",
  password: "",
};
function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  // const { setCurrentUser } = useContext(UserContext);
  const resetFormFields = function () {
    setFormFields(defaultFormFields);
  };
  const onChangeHandler = function (event) {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async function (e) {
    e.preventDefault();

    try {
      const { user } = await SignInOldUser(email, password);
      // console.log(user);
      // setCurrentUser(user);
      resetFormFields();
    } catch (err) {
      if (err.code == "auth/wrong-password") alert("WRONG EMAIL/PASSWORD");
      else if (err.code == "auth/user-not-found")
        alert("No user found , create new id");
      else {
        console.log(` Error ${err.code}`);
      }
    }
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-up-container">
      <h2>I already have a Account </h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={onChangeHandler}
          value={email}
          name="email"
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={onChangeHandler}
          value={password}
          name="password"
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
