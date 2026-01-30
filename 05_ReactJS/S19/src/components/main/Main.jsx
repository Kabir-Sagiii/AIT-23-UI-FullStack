import { useContext } from "react";
import SignIn from "../sign-in/Signin";
import Home from "../home/Home.jsx";
import AuthContext from "../context-api/authContext.js";

function Main() {
  var { isLoggedIn } = useContext(AuthContext);
  return <div>{isLoggedIn ? <Home /> : <SignIn />}</div>;
}

export default Main;
