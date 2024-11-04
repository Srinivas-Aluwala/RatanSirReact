import React, { useState } from "react";
import GoogleLoginComponent from "./GoogleLoginComponent";
import FaceBookLoginComponent from "./FaceBookLoginComponent";
import GitHubLoginComponent from "./GitHubLoginComponent";
import './Login.css'

const Login = () => {



  return (
    <>
      <h1>Welcome to the Login Page</h1>

          <div className="modal-content">
            <GoogleLoginComponent />
            <FaceBookLoginComponent />
            <GitHubLoginComponent />
          </div>

    </>
  );
};


export default Login;
