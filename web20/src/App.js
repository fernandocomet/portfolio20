import logo from './logo.svg';
import React from "react";
import "./styles/_index.scss";
import { DarkToggle } from "./DarkToggle";
import "react-toggle/style.css";

function App() {
  return (
    <div className="App">
      <div className="TextCard">
        <h2 className="TextCard__Title">Temperature for plants 🌱</h2>
        <p className="TextCard__Body">
          The proper condition of temperature is the most difficult thing to
          regulate and maintain in growing plants in the house.
        </p>
        <button className="Button">Learn more</button>
      </div>

      <DarkToggle />
    </div>
  );
}

export default App;
