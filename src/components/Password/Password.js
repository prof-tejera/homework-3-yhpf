import { useState } from "react";
import "./Password.css";

const Password = ({id}) => { 
  // Show hide password
  // https://melvingeorge.me/blog/show-or-hide-password-ability-reactjs

  // Initialize a boolean state
  const [showPassword, setShowPassword] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked inverse the boolean state of passwordShown
    setShowPassword(!showPassword);
  };

    return (
        <div>
            <label htmlFor={id}><sup className="redstar">&#8727;</sup> Password: </label>
            <input type={showPassword ? "text" : "password"} name={id} id={id} placeholder="enter password" className="pw-input"></input>
            <button className="pw-button" onClick={togglePassword}><i className="far fa-eye"></i></button>
        </div>
    );

};

export default Password;