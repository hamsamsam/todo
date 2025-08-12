"use client";
import { useState } from "react";

export default function Home() {
  const [inProgress, setInProgress] = useState<string[]>([]);

  const [finished, setFinished] = useState<string[]>([]);

  const [userInput, setInput] = useState<string>("");

  const handleAdd = () => {
    setInProgress([...inProgress, userInput]);
  };

  const getList = (inputArray: string[], listType: "inProgress" | "finished") => {
    return inputArray.map((item, index) => (
      <li key={index}>
        {item}
        <button onClick={() => handleRemove(index, listType)}>x</button>
        {listType === "inProgress" && <button onClick={() => handleFinished(index)}> done </button>}
      </li>
    ));
  };

  const handleFinished = (index: number) => {
    handleRemove(index, "inProgress");
    setFinished([...finished, inProgress[index]]);
  };

  const handleRemove = (index: number, listType: "inProgress" | "finished") => {
    if (listType == "inProgress") {
      setInProgress((prev) => prev.filter((_, i) => i !== index));
    } else {
      setFinished((prev) => prev.filter((_, i) => i !== index));
    }
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
      <ul className="list-group">{getList(inProgress, "inProgress")}</ul>
      <h2>Completed</h2>
      <ul className="list-group">{getList(finished, "finished")}</ul>
    </div>
  );
}
