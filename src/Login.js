import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = event => {
    event.preventDefault(); // this stop refresh
    //logic fro login
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        //login and redirect to homepage
        history.push("/");
      })
      .catch(e => alert(e.message));
  };

  const register = event => {
    event.preventDefault(); // this prevents default
    //Logic for register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        //create a user,login and redirect to homepage
        history.push("/");
      })
      .catch(e => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__img"
          src="data:image/jpeg;base64,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"
          alt="Login Logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <button onClick={login} type="submit" className="login__signIn">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login__createAccount">
          Create your Amazon Account!!{" "}
        </button>
      </div>
    </div>
  );
}
