import React from "react";
import "./Landing.css";

export const Landing =()=>{
    return (
      <div className="Landing">
        <h1> 50 Cofounder Questions </h1>
        <div>
        <h2> About</h2>
        <p>
          {" "}
          This is an app that has 50 questions to ask your cofounder before
          you build a startup together!
        </p>
        <a href="https://firstround.com/review/the-founder-dating-playbook-heres-the-process-i-used-to-find-my-co-founder/">
          {" "}
          The 50 questions were taken from this website.{" "}
        </a>
        </div>
        <div>
          <h2> How to play</h2>
          <p> There are 3 main ways to use this platform:</p>
          <h3> 1. Comprehensive</h3>
          <p> Work through all the topics and questions in each topic!</p>
          <h3> 2. Kinda Random </h3>
          <p>
            {" "}
            Pick a topic and then choose a random question using the random
            button.
          </p>
          <h3> 3. Selective </h3>
          <p>
            {" "}
            Pick a topic of your choice and filter through the questions and
            start with your favourite!
          </p>
        </div>
      </div>
    );
}