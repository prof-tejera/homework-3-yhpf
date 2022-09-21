import { useState } from "react";
import "./Input.css";

const Input = ({type, name, id, label, placeholder}) => { 
  // Show hide password
  // https://melvingeorge.me/blog/show-or-hide-password-ability-reactjs

  // Initialize a boolean state
  const [showPassword, setShowPassword] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked inverse the boolean state of passwordShown
    setShowPassword(!showPassword);
  };

  // use let and not const since we need to be able to change the value
  let formpart;

  // https://www.w3schools.com/js/js_switch.asp
  switch (type) {
    // password text field
    case "password":
      formpart = (
        <div>
          <label htmlFor={id}><sup className="redstar">&#8727;</sup> {label}: </label>
          <input type={showPassword ? "text" : {type}} name={name} id={id} placeholder={placeholder} className="pw-input"></input>
          <button className="pw-button" onClick={togglePassword}><i className="far fa-eye"></i></button>
        </div>
      );
      break;
    // checkbox
    case "checkbox":
      formpart = (
        <div className="remember-me">
          <input type={type} name={name} id={id} ></input>
          <label  htmlFor={id}> {label}</label><br/>
        </div>
      );
      break;
    // submit
    case "submit":
      formpart = <input type={type} name={name} id={id}></input>;
      break; 
    // username text field
    default:
      formpart = (
        <div>
          <label htmlFor={id}><sup className="redstar">&#8727;</sup> {label}: </label>
          <input type={type} name={name} id={id} placeholder={placeholder} className="un-input"></input><br/>
        </div>
      );
  }

  return formpart;
};

export default Input;
