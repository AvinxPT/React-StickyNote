import { useState } from "react";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  //Create new User POST
  const clickHandler = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };
    if (password === confirm) {
      const res = await fetch("http://localhost:5500/user", requestOptions);
      const data = await res.json();
      console.log(data);
      alert("New User Created");
    } else {
      alert("Error creating user");
    }
  };

  //Create new User POST

  return (
    <div className="register-wrapper">
      <form className="register" onSubmit={clickHandler}>
        <input
          type="text"
          placeholder="Desired username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirm"
          onChange={(e) => setConfirm(e.target.value)}
          value={confirm}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
