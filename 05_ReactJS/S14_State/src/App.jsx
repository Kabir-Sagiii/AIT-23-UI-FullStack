import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import StateObject from "./components/state-concept/StateObject.jsx";
import StateArray from "./components/state-concept/StateArray.jsx";
function App() {
  return (
    <div id="app">
      <Navbar />
      {/* <StateObject /> */}
      <StateArray />
    </div>
  );
}

export default App;
