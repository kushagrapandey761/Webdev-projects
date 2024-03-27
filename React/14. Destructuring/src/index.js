// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
console.log(cars[1]);
const [honda,tesla] = [cars[0],cars[1]];
const [teslaTopSpeed,teslaTopColour] = [tesla.speedStats.topSpeed,tesla.coloursByPopularity[0]];
const [hondaTopSpeed,hondaTopColour] = [honda.speedStats.topSpeed,honda.coloursByPopularity[0]]
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Popular color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
