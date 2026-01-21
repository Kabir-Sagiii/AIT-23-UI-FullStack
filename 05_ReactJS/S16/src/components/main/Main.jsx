import React from "react";
import SignIn from "../sign-in/Signin";
import Home from "../home/Home.jsx";
function Main({ isLoggedIn, login }) {
  return <div>{isLoggedIn ? <Home /> : <SignIn login={login} />}</div>;
}

export default Main;
