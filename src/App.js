import React, { useState, useEffect } from "react";
// import { render } from "react-dom";
import "./styles.css";

//import Hello from "./hello";

export default function App() {
  const [name, setName] = useState("World");

  useEffect(() => {
    document.title = `Hello, ${name}`
  });

  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Start editing this to see the magin happen!</p>
      <button onClick={() => setName('James')}>Chage the name</button>
    </div>
  );
}
