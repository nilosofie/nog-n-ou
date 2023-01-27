import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//Components
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

//styles
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles.jsx";

//firebase
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";

//Global
const defaultFormFields = {
  email: "",
  password: "",
};

//Component Function

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate("/");
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  //---Handel Submit-----------
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      navigate("/");
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  //------------------------------

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">sign in</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
}

export default SignInForm;
