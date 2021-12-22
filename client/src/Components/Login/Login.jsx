import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const LoginHandler = (e) => {
    e.preventDefault();
    const findThisUser = {
      email,
      password,
    };
    try {
      axios.post("http://localhost:5000/user/login", findThisUser);
      history("/");
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="main-container">
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="password"
              placeholder="Please enter your Password"
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={LoginHandler}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
