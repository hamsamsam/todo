"use client";
import { useState } from "react";

export default function Home() {
  const [inProgress, setInProgress] = useState<string[]>([]);

  const [finished, setFinished] = useState<string[]>([]);

  const [userInput, setInput] = useState<string>("");

  const handleAdd = () => {
    setInProgress([...inProgress, userInput]);
  };

  const getList = (inputArray: string[]) => {
    return inputArray.map((item, index) => <li key={index}>{item}</li>);
  };

  return (
    <div>
      <h1>TO-DO APP</h1>
      <span>
        <input type="text" onChange={(e) => setInput(e.target.value)} placeholder="Input here..."></input>
        <button onClick={handleAdd} type="button">
          +
        </button>
      </span>
      <h2>In-progress</h2>
      <ul className="list-group">{getList(inProgress)}</ul>
      <h2>Completed</h2>
      <ul className="list-group">{getList(finished)}</ul>
    </div>
  );
}
