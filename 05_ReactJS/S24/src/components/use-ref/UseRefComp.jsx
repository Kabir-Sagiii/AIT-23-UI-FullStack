import { useRef } from "react";

function UseRefComp() {
  var h1Ref = useRef(null); // h1Ref = {current : null}
  var pRef = useRef(null);
  var inputRef = useRef(null);

  const modify = () => {
    h1Ref.current.style.color = "red";
    pRef.current.innerText = `The agent landscape keeps moving fast. We're all still figuring out how to work with agents. Fire-and-forget when the task is clear, hands-on when you want control, or somewhere in between; it depends on the task, and it changes. Either way, more agents mean more sessions to keep track of. Agents are everywhere. We've been working to make VS Code the home for multi-agent development. One place to run your agents, manage your sessions, and pick the right tool for each task, without switching editors or juggling subscriptions.`;
    pRef.current.style.color = "white";
    pRef.current.style.backgroundColor = "black";
    pRef.current.style.padding = "50px";

    console.log(inputRef.current.value);
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1 ref={h1Ref}>useRef Concept</h1>
      <br />
      <input type="text" placeholder="username" ref={inputRef} />
      <br />
      <br />
      <p ref={pRef}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi cumque
        ipsa nulla placeat, laboriosam aspernatur sed facilis praesentium eaque
        accusamus officia et dolorem optio vitae sit, debitis velit! Officia
        culpa repudiandae possimus nemo aliquid distinctio laboriosam ipsa et
        animi obcaecati iure, assumenda quisquam iusto, omnis mollitia qui
        repellendus atque molestias voluptas magnam modi in. Minus repudiandae
        dignissimos nam qui accusantium enim facilis laboriosam reprehenderit
        praesentium officia consectetur, nisi dolorem eaque corrupti? Quo
        voluptates ab dicta aut suscipit numquam recusandae ducimus quasi
        dignissimos voluptatibus consectetur impedit perferendis quia rerum
        placeat officiis error reprehenderit, officia nobis voluptatum
        cupiditate odio repudiandae, possimus mollitia.
      </p>
      <br />
      <button onClick={modify}>Modify UI Design</button>
    </div>
  );
}

export default UseRefComp;
