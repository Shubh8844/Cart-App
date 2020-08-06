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
          src="https://50xgkfsltn425e6xcp9wmy9m-wpengine.netdna-ssl.com/wp-content/uploads/sites/33/2014/12/amazon-logo-a-smile-black.png"
          alt="Login Logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In/Sign Up</h1>
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
