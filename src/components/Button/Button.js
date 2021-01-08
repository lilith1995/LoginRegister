import React from "react";
import "./Button.scss";

function Button(props) {
  return (
    <button onClick={props.onClick} className="button">
      {props.children} Sign In!{" "}
    </button>
  );
}

export default Button;
