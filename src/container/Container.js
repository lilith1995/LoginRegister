import React, {useState} from 'react';


// styling
import '../App.scss';

// components
import SignIn from '../components/SignIn';

//validation

import { validation } from "../util/validation"

const Container = () => {
  const [password, setPassword] = useState("");
  
  const onChange = (event) =>{
    setPassword(event.target.value)
    validation(password)
    setPassword('')
  } 

  return (
    <div className="Container cfb">
        <h2>Welcome Back</h2>
        <SignIn value={password} onChange={onChange}/>
      </div>
    
  );
        }

export default Container;