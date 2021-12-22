import React from "react";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/Signup/Signup";
import Home from "./Components/Home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
