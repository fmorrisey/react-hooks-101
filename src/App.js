import React from "react";
// import { render } from "react-dom";
import "./styles.css";

import Hello from "./hello";
import Looper from "./looper";
import Button from "./button";



export default function App() {

var styles = {
  text: "hello",
  color: "red"
};

const cats = [
    { name: "Beans", weight: 200, description: "big boi" },
    { name: "Fluffer", weight: 100, description: "smol" },
    { name: "Norman", weight: 300, description: "Oh Lawd" }
  ];

return (
  <div>
  <Looper data={cats}/>
  <Button 
    text={styles.text} 
    color={styles.color}/>
  </div>
  )
}
