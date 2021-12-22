import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const addNewUser = {
      name,
      email,
      password,
    };
    try {
      axios.post("http://localhost:5000/user/new", addNewUser);
      alert("SignUp successfully");
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
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="text"
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
              type="text"
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
          onClick={submitHandler}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};
export default SignUp;
