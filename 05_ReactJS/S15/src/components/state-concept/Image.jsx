import { useState } from "react";
import "./Image.css";
function Image() {
  const [url, setUrl] = useState(
    "https://tse2.mm.bing.net/th/id/OIP.EntHChgUyirgbZ9A3zTxkAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
  );

  function changeToAngular() {
    setUrl(
      "https://thecustomizewindows.cachefly.net/wp-content/uploads/2022/03/Angular-A-Widely-Used-Framework-for-Web-Development.png"
    );
  }

  function changeToReact() {
    setUrl(
      "https://tse2.mm.bing.net/th/id/OIP.EntHChgUyirgbZ9A3zTxkAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
    );
  }

  return (
    <div className="image">
      <img src={url} width="500" height="300" alt="" /> <br />
      <br />
      <button onClick={changeToReact}>React JS</button>
      <button onClick={changeToAngular}>Angular</button>
    </div>
  );
}

export default Image;
