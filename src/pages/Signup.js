import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (event) => {
    if (
      password === confirmPassword &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      alert("Account created!");
      navigate("/homepage");
    } else {
      alert(
        "Passwords do not match, or one or more fields were left blank. Please try again."
      );
      setPassword("");
      setConfirmPassword("");
    }
  };

  const handleLogin = (event) => {
    alert("Log in successful!");
    navigate("/homepage");
  };

  const handleForgotPassword = (event) => {
    alert("Code sent!");
    event.preventDefault();
  };

  return (
    <div>
      <main>
        <div className="signuplogin">
          <div>
            <h2>Sign up:</h2>
            <form onSubmit={handleSignup}>
              <label htmlFor="email">Email:</label>{" "}
              <input type="text" id="email" name="email" /> <br />
              <label htmlFor="password">Password:</label>{" "}
              <input
                type="text"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />{" "}
              <br />
              <label htmlFor="confirmPassword">Confirm password:</label>{" "}
              <input
                type="text"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />{" "}
              <br />
              <input type="submit" value="Sign up!" />
            </form>
          </div>
          <div>
            <h2>Log in:</h2>
            <form onSubmit={handleLogin}>
              <label htmlFor="email">Email:</label>{" "}
              <input type="text" id="email" name="email" /> <br />
              <label htmlFor="password">Password:</label>{" "}
              <input type="text" id="password" name="password" /> <br />
              <br />
              <input type="submit" value="Log in!" />
            </form>
            <br />
            <form onSubmit={handleForgotPassword}>
              <h2>Forgot password?</h2>
              <label htmlFor="enter-email">Enter email:</label>{" "}
              <input type="text" id="enter-email" name="enter-email" /> <br />
              <br />
              <input type="submit" value="Send me a code!" />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
