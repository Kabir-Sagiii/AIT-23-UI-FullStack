import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Main from "./components/main/Main.jsx";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div id="app">
      {isLoggedIn ? <Navbar logout={logout} /> : null}
      <Main isLoggedIn={isLoggedIn} login={login} />
    </div>
  );
}

export default App;
