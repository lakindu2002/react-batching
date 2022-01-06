import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { flushSync } from "react-dom";

const App = () => {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  console.log("React 18 Application Re-Rendering");

  const handleClick = () => {
    flushSync(() => {
      setClicked(!clicked);
      // react will create a re-render here
    });
    setCount(count + 1);
    // react will create a re-render here
  };

  const handleAsyncClick = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
      // trigger 1 re-render due to React 18 Improved Batching
      setClicked(!clicked);
      setCount(count + 1);
    });
  };

  const handleTimeOutClick = () => {
    setTimeout(() => {
      // trigger 1 re-render due to React 18 Improved Batching
      setClicked(!clicked);
      setCount(count + 1);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>Count: {count}</div>
        <div>Clicked: {clicked}</div>
        <button onClick={handleClick}>Event Handler</button>
        <button onClick={handleAsyncClick}>Async Handler</button>
        <button onClick={handleTimeOutClick}>Timeout Handler</button>
      </header>
    </div>
  );
};

export default App;
