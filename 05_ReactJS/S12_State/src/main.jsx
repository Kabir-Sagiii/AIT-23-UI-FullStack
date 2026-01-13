import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Count from "./components/state-concept/Count.jsx";

createRoot(document.getElementById("root")).render(<Count />);

// const root = createRoot(document.getElementById("root"));
// root.render(<App />);

// const rootDom = document.getElementById("root")
// const root = createRoot(rootDom)
// root.render(<App />)
