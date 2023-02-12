import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.style.scss";
import {
  createAuthUserFromEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utility/firebase/firebase";
import Button from "../button/button.component";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const resetFormFields = function () {
    setFormFields(defaultFormFields);
  };

  const onChangeHandler = function (event) {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async function (e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password not match");
      return;
    }
    try {
      const { user } = await createAuthUserFromEmailAndPassword(
        formFields.email,
        formFields.password
      );

      if (!user) return;
      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });
      resetFormFields();
    } catch (err) {
      if (err.code == "auth/email-already-in-use")
        alert("Email Already in use");
      else {
        console.log(` Error ${err.code}`);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't Have an Account Yet ?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={onChangeHandler}
          value={displayName}
          name="displayName"
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={onChangeHandler}
          value={confirmPassword}
          name="confirmPassword"
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
