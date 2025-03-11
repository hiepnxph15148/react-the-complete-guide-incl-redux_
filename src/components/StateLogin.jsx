import { useState } from "react";
import Input from "../components/input"
import {isEmail,isNotEmpty,hasMinLength} from '../util/validation'
export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");

  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });
  const [didEdit,setDidEdit] = useState({
    email:false,
    password: false,
  });
  const emailIsValid = didEdit.email && 
  !isEmail(enteredValue.email) && 
  !isNotEmpty(enteredValue.email)
  const passwordIsValid = didEdit.password 
  && hasMinLength(enteredValue.password,6)
  function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    console.log(enteredValue, "object submitted");
  }

  function handleInputChange(identifier, value) {
    setEnteredValue((prevValue) => ({
      // Update the entered value for the specific identifier
      ...prevValue,
      [identifier]: value, // Update the entered value for the specific identifier
    }));
    // Update the entered value for the specific identifier
    setDidEdit((prevEdit)=>({
      ...prevEdit,
      [identifier]: false, // Update the entered false for
    }))

  }
  function handleInputBlur(identifier) {
    setDidEdit((prevState) => ({
     ...prevState,
      [identifier]: true,
    }));
  }
  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  // Render the form
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input  
        id="email"
        type="email"
        name="email"
        label="email"
        onBlur={()=>handleInputBlur('email')}
        onChange={(event) => handleInputChange("email", event.target.value)}
        value={enteredValue.email}
        error={emailIsValid&& "Please enter a valid email address"} 
        
        />
        <Input  
        id="password"
        type="password"
        name="password"
        label="password"
        onChange={(event) =>
           handleInputChange("password", event.target.value)
        }
        onBlur={()=>handleInputBlur('password')}
        value={enteredValue.password}
        error={passwordIsValid && 'Please enter a valid password!'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
