import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="container">
      <h1>Tipz n Tripz</h1>
      <form>
        <div className="form-group">
          <label for="username">Username</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"></input>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
        <button type="login" className="btn btn-primary">Login</button>
        <button type="createAccount" className="btn btn-success">Create Account</button>
      </form>
    </div>
  );
}

export default Home;
