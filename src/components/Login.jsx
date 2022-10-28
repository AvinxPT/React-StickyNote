import { setCookie } from "../helpers/cookies";

import React, { useState } from "react";

function Login({ onSubmit }) {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    // check db
    onSubmit(loginDetails.username);
    //check db
    //let login = JSON.stringify(loginDetails);
    //setCookie("user", login, 2);
  };

  return (
    <section className="login-wrapper">
      <form className="login" onSubmit={submitHandler}>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={(e) =>
            setLoginDetails({ ...loginDetails, username: e.target.value })
          }
          value={loginDetails.username}
        ></input>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={(e) =>
            setLoginDetails({ ...loginDetails, password: e.target.value })
          }
          value={loginDetails.password}
        ></input>
        <button type="Submit" value="Login">
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
