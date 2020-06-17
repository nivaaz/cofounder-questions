import React, { useState } from "react";
import "./App.css";
import questions from "./data/questions.json";
import { Landing } from "./components/Landing/Landing";

function App() {
  const [category, updateCategory] = useState("How you operate");
  const [count, updateCount] = useState(0);
  const q = ["How you operate",
    "Roles",
    "Corporate Structure and Funding",
    "Personal Motivation",
    "Commitment & Finances",
    "Team Culture",
    "Co-founding relationship"]
  const updateAll = (cat, cnt )=>{
    updateCategory(cat);
    updateCount((cnt>questions[cat].length) ? questions[cat].length-1: cnt);
  }
  const randAll = () =>{
    const newcat = q[Math.round(Math.random() * 7)];
    const newcount = Math.round(Math.random() * questions[newcat].length);
    updateCategory(newcat);
    updateCount(newcount);
  }
  return (
    <div className="App">
      <Landing />

      <div className="game"> 
      <div >
        <h2 className={category}> Pick a category </h2>
        <div className="buttons">
          <button
            className={
              category === "How you operate" ? "selected operate" : "operate"
            }
            value="How you operate"
            onClick={(e) => {
              updateAll(e.target.value, count)
            }}
          >
            How you operate?
          </button>
          <button
            className={category === "Roles" ? "selected Roles" : "Roles"}
            onClick={(e) => {
              updateAll(e.target.value, count)
            }}
            value="Roles"
          >
            Roles
          </button>
          <button
            className={category === "Personal Motivation" ? "selected Culture" : "Culture"}
            onClick={(e) => {
              updateAll(e.target.value, count)
            }}
            value="Personal Motivation"
          >
            Personal Motivation
          </button>
          <button
            className={
              category === "Corporate Structure and Funding"
                ? "selected Funding"
                : "Funding"
            }
            onClick={(e) => {
              updateAll(e.target.value, count)
            }}
            value="Corporate Structure and Funding"
          >
            Corporate Structure and Funding
          </button>
          <button
            className={
              category === "Commitment & Finances"
                ? "selected Finances"
                : "Finances"
            }
            onClick={(e) => {
              updateAll(e.target.value, count)
            }}
            value="Commitment & Finances"
          >
            Commitment & Finances
          </button>
          <button
            className={
              category === "Team Culture" ? "selected Culture" : "Culture"
            }
            onClick={(e) => {
              updateAll(e.target.value, count)
            }}
            value="Team Culture"
          >
            Team Culture
          </button>
          <button
            className={
              category === "Co-founding relationship"
                ? "selected relationship"
                : "relationship"
            }
            onClick={(e) => {
              updateAll(e.target.value, count)
            }}
            value="Co-founding relationship"
          >
            Co-founding relationship
          </button>
        </div>
      </div>

      <div>
        <h2 className={category}>{category}</h2>
        <div className={category}>
          <p className={category}> {questions[category][count]}</p>
        </div>
          <div className="nav">
          <button
            className={"pos " + category}
            onClick={(e) =>
              updateCount(
                count - 1 < 0 ? questions[category].length - 1 : count - 1
              )
            }
          >
            {" "}
            {" < "}{" "}
          </button>
          <h2 className={category}>
            {count + 1} of {questions[category].length}
          </h2>
          <button
            className={"pos " + category}
            onClick={(e) =>
              updateCount(
                count + 1 < questions[category].length ? count + 1 : 0
              )
            }
          >
            {" "}
            {" > "}{" "}
          </button>
        </div>

        <button
          className={category + " rando"}
          onClick={(e) => {
            randAll()}}
        >
          {" "}
          Random Question{" "}
        </button>
      </div>
    </div></div>
  );
}

export default App;
