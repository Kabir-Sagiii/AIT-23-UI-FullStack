import "./Home.css";
import Navbar from "../navbar/Navbar";
import Ads from "./ads/Ads";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Ads />
    </div>
  );
}

export default Home;
