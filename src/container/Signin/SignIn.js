import React, {useState} from "react";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { ValidateEmail, ValidatePassword } from "../../util/validation";
import "../../App.scss";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorText, setError] = useState("");

  const handleEmailChange = (event) => {
    const newVal = event.target.value;
    setEmail(newVal);
    const errorText = ValidateEmail(newVal).errorText;
    setError(errorText);
    setEmail(newVal);
  };
  const handlePasswordChange = (event) => {
    const newVal = event.target.value;
    setPassword(newVal);
    const errorText = ValidatePassword(newVal).errorText;
    setError(errorText);
    setPassword(newVal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = ValidatePassword(password);

    if (validateErrors) {
      setError(validateErrors);
    } else {
      setError(null);
    }
  };
  return (
    <div className="form-comp cfb">
      <h1>Sign In!</h1>
      <form className="sign-up-form cfb">
        <label>
          Email:
          <br />
          <Input value={email} onChange={handleEmailChange} type="email" />
        </label>
        <label>
          Password:
          <br />
          <Input value={password} onChange={handlePasswordChange} />
        </label>
        <Button title="Sign in!" onClick={handleSubmit} />
        <p>{errorText}</p>
      </form>
    </div>
  );
};

export default SignIn;
