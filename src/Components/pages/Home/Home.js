import React from "react";
import "./Home.css";
import Media from 'react-media';

function Home() {
  return (
    <div className="container" id="homeContainer" >
      <div className="row">
      <div className="col-3"></div>
        <div className="col-6"><h1>Tipz n Tripz</h1></div>
      </div>
      <div className="row">
      <div className="col-3"></div>
        <div className="col-6">
        <form>
        <div className="form-group">
          <label for="username"></label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"></input>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1"></label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
        <div><button type="login" className="btn btn-primary">Login</button></div>
        <div><button type="createAccount" className="btn btn-success">Create Account</button></div>
      </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
