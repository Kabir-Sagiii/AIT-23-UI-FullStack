import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import Count from "./components/state-concept/Count.jsx";
import Image from "./components/state-concept/Image.jsx";
import Task from "./components/state-concept/Task.jsx";
function App() {
  return (
    <div id="app">
      <Navbar />
      {/* <Home /> */}
      <Task />
      <Image />
      <Count />
    </div>
  );
}

export default App;
