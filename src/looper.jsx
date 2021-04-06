import React from "react";
import sort, { byWeightAscending } from "./sort";

export default function looper() {
  const data = [
    { name: "Beans", weight: 200, description: "big boi" },
    { name: "Fluffer", weight: 100, description: "smol" },
    { name: "Norman", weight: 300, description: "Oh Lawd" }
  ];

  const sortedData = byWeightAscending(data);
  return (
    //console.log(sortedData)  
    <ol>
      {sortedData.map(cat => (
        <li key="cat.name">
          <p>
            {cat.name}, <i>{cat.weight}lbs</i>
            <br />
            {cat.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
