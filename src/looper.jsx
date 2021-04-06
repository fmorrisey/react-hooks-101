import React from "react";
import sort, { byWeightAscending, byWeightDescending } from "./sort";

export default function looper(props) {
    const sortedData = byWeightAscending(props.data);
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
