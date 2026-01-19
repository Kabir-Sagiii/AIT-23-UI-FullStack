import { useState } from "react";
import "./Task.css";
import { changeToHTML } from "./Task";

function Task() {
  const [url, setUrl] = useState(
    "https://th.bing.com/th/id/R.368e10874a2c1d178979e00e13df17d7?rik=Y6MdzypF5Nhqaw&riu=http%3a%2f%2fst3.depositphotos.com%2f1350793%2f13201%2fi%2f450%2fdepositphotos_132018592-stock-photo-online-courses-concept-with-hand.jpg&ehk=9uZtUoV7f8L4KPOH95%2fkAsJ5tSJfkP53I9J1q00IOUs%3d&risl=&pid=ImgRaw&r=0"
  );
  const [heading, setHeading] = useState("Introduction to Course Content");
  const [content, setContent] =
    useState(` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          animi consectetur odio recusandae veniam voluptas magnam amet. Eveniet
          quam itaque necessitatibus vitae quidem hic velit ab mollitia
          provident impedit sunt sequi, earum amet nostrum omnis placeat, nisi
          ullam libero est corporis. Rerum obcaecati odio, nostrum optio dolorem
          suscipit eius neque dolor. Id suscipit nam, voluptatum tenetur
          doloremque amet saepe vitae earum, deserunt sit distinctio
          exercitationem iusto incidunt eos quae. Officia repellendus animi, ea
          excepturi aliquam autem incidunt explicabo at quaerat, totam
          laboriosam magni error? Rem obcaecati unde vitae veniam dicta cum odit
          amet hic in nisi, eum blanditiis illo enim. suscipit eius neque dolor.
          Id suscipit nam, voluptatum tenetur doloremque amet saepe vitae earum,
          deserunt sit distinctio exercitationem iusto incidunt eos quae.
          Officia repellendus animi, ea excepturi aliquam autem incidunt
          explicabo at quaerat, totam laboriosam magni error? Rem obcaecati unde
          vitae veniam dicta cum odit amet hic in nisi, eum blanditiis illo
          enim.`);

  return (
    <div className="task">
      <div>
        <img src={url} width={"100%"} height={370} alt="" />
      </div>
      <div className="content">
        <h1>{heading}</h1>
        <p>{content}</p>

        <button
          onClick={() => {
            changeToHTML(setUrl, setHeading, setContent);
          }}
        >
          HTML
        </button>

        <button>CSS</button>
        <button>JS</button>
        <button>REACT JS</button>
        <button>ANGULAR</button>
      </div>
    </div>
  );
}

export default Task;
