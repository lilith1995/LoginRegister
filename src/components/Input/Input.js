import React from "react";
import "./Input.scss"

function Input(props){
    
    if (props.type === "password"){
        return(
            <input value={props.value} onChange={props.onChange} type="password" />
        )
    }
    if (props.type === "email"){
        return(
            <input value={props.value} onChange={props.onChange} type="email" />
        )
    }
} 

export default Input;