import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid,setEmailIsInvalid] = useState(false);
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    const enteredValue = {
      email: email.current.value,
      password: password.current.value,
    };
    const emailIsValid = enteredValue.email.includes('@');
    if(!emailIsValid){
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false); //
    console.log("Https send request...");
  }

  // Render the form
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
          <div className="control-error">

          </div>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
