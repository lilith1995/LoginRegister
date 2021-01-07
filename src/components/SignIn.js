import React from 'react';

import Input from "../components/Input/Input"

import '../App.scss';

function SignIn(props) {
  return (
    <div className="form-comp cfb">
      <h1>Sign In!</h1>
      <form className="sign-up-form cfb">
        <label>
            Your Email:
          <br/>
          <Input value={props.password} onChange={props.onChange} type ="email" placeholder="Enter your email..." label="" id="email"/>
        </label>
        <label>
        Your Password:
          <br/>
          <Input value={props.password} onChange={props.onChange} type="password" placeholder="Enter your password..." label="" id="password"/>
        </label>
        <button>
          Sign In!
        </button>
      </form>
    </div>
  );
}

export default SignIn;