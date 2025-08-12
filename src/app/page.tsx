"use client";
import { useState } from "react";

export default function Home() {
  const [inProgress, setInProgress] = useState<string[]>([]);

  const [finished, setFinished] = useState<string[]>([]);

  const [userInput, setInput] = useState<string>("");

  const handleAdd = () => {
    setInProgress([...inProgress, userInput]);
    setInput("");
  };

  const getList = (inputArray: string[], listType: "inProgress" | "finished") => {
    return inputArray.map((item, index) => (
      <li className="mb-2" key={index} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <div style={{ fontWeight: "bold", fontSize: "24px" }}>-</div>
        {listType === "inProgress" ? <div>{item}</div> : <s>{item}</s>}
        {listType === "inProgress" && (
          <button style={{ marginLeft: "auto", backgroundColor: "#ccff00", borderColor: "#a7cf04ff", color: "black", fontWeight: "bold" }} className="btn btn-secondary" onClick={() => handleFinished(index)}>
            ✓
          </button>
        )}
        <button style={listType === "finished" ? { marginLeft: "auto", color: "black" } : { color: "black" }} className="btn btn-danger" onClick={() => handleRemove(index, listType)}>
          x
        </button>
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
    <div className="mx-70 my-10" style={{ height: "100vh", width: "100vw" }}>
      <h1>TO-DO APP</h1>
      <div className="d-flex mb-4">
        <input className="form-control me-2" style={{ width: "60%" }} type="text" onChange={(e) => setInput(e.target.value)} value={userInput}></input>
        <button onClick={handleAdd} type="button" className="btn btn-light" style={{ backgroundColor: "#ccff00", borderColor: "#a7cf04ff" }}>
          <b>+</b>
        </button>
      </div>
      <h2>In-progress</h2>
      <ul className="list-group mb-4" style={{ borderColor: "white", borderWidth: "2px", minHeight: "20%", maxWidth: "62%", padding: "25px" }}>
        {getList(inProgress, "inProgress")}
      </ul>
      <h2>Completed</h2>
      <ul className="list-group" style={{ borderColor: "white", borderWidth: "2px", minHeight: "20%", maxWidth: "62%", padding: "25px" }}>
        {getList(finished, "finished")}
      </ul>
    </div>
  );
}
