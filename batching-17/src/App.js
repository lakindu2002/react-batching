import { useState } from "react";
import "./App.css";

const App = () => {
  const [additionCount, setAdditionCount] = useState(0);
  const [substractionCount, setSubstractionCount] = useState(0);

  console.log("Component Rendering");

  const handleOnClick = () => {
    setAdditionCount(additionCount + 1);
    setSubstractionCount(substractionCount - 1);
  };

  const handleOnClickAsync = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
      setAdditionCount(additionCount + 1);
      setSubstractionCount(substractionCount - 1);
    });
  };

  return (
    <div>
      <button
        style={{ width: "50%", height: "30%" }}
        onClick={() => {
          handleOnClick();
        }}
      >
        Click Me!
      </button>
      <button
        style={{ width: "50%", height: "30%" }}
        onClick={() => {
          handleOnClickAsync();
        }}
      >
        Click Me Async Call!
      </button>
      <div>Add Count: {additionCount}</div>
      <div>Substraction Count: {substractionCount}</div>
    </div>
  );
};

export default App;
