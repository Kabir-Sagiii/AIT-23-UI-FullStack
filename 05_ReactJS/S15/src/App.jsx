import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Text from "./components/props/Text.jsx";
// import A from "./components/props/A.jsx";
import A from "./components/context-api/A.jsx";
function App() {
  return (
    <div id="app">
      <Navbar />
      <A />
      {/* <Text /> */}
    </div>
  );
}

export default App;
