import { useState } from "react";

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
  const emailIsValid = didEdit.email && !enteredValue.email.includes('@')

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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={()=>handleInputBlur('email')}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValue.email}
          />
          <div className="control-error">
            {emailIsValid && <p>Please enter a valid email address</p>}
          </div>
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValue.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
