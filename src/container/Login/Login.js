import React, {useState} from 'react';

import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import { validation } from "../../util/validation"
import './Login.scss';

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorText, setError] = useState("");

  const handlePasswordChange = (event) => {
    const newVal = event.target.value
    setPassword(newVal);
    const errorText = validation(newVal).errorText;
    setError(errorText)
    setPassword(newVal);
  } 
  const handleEmailChange = (event) => {
    const newVal = event.target.value
    setEmail(newVal);
    const errorText = validation(newVal).errorText;
    setError(errorText);
    setEmail(newVal);
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    const validateErrors = validation(password)

    if(validateErrors) {
        setError(validateErrors);
    }else {         
        setError(null);
    }
}
  
  return (
    <div className="Container cfb">
        <h2>Welcome Back</h2>
    <div className="form-comp cfb">
      <h1>Sign In!</h1>
      <form className="sign-up-form cfb">
        <label>
            Your Email:
          <br/>
          <Input 
            value ={email} 
            onChange={handleEmailChange} 
            type = "email"
          />
        </label>
        <label>
        Your Password:
          <br/>
          <Input 
            value={password} 
            onChange={handlePasswordChange} 
          />
        </label>
        <p>{ errorText }</p>
        <Button
          title="Sign in!"
          onClick={handleSubmit}
        />
      </form>
    </div>
    </div>  
  );
        }

export default Login;