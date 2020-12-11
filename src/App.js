import React from "react";
import "./styles.css";
import { useState } from "react";
import { conceptDB } from "./conceptDB";

export default function App() {
  const [selectedTopic, setTopic] = useState("Fundamentals");

  function topicClickHandler(topic) {
    setTopic(topic);
    //console.log(topic);
  }
  return (
    <div className="App">
      <h1> Learn JS with Me! </h1>
      <p>
        <strong>
          {" "}
          Find topics and resources to make yourself a JavaScript Ninja
        </strong>{" "}
      </p>

      <div>
        {Object.keys(conceptDB).map((topic) => (
          <button
            onClick={() => topicClickHandler(topic)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              border: "2px solid #323330",
              padding: "0.5rem  1rem",
              margin: "1rem 0.3rem",
            }}
          >
            {topic}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {conceptDB[selectedTopic].map((topic) => (
            <li
              key={topic.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #323330",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", fontWeight: "bolder" }}>
                {" "}
                {topic.name}{" "}
              </div>
              <div style={{ fontSize: "smaller" }}>
                {" "}
                <a href={topic.link}>Read Here </a>{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
