import React, { useState, useEffect } from "react";

export default function hello(){
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