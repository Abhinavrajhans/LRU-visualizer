import "./App.css";
import React, { useState } from "react";
import Grid from "./components/grid";
import Write from "./components/write";
import Mapping from "./components/mapping";
function App() {
  const [nodes, setNodes] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [tell, setTell] = useState("Hi");
  return (
    <div className="visual">
      <h1>LRU VISUALIZER</h1>
      <Write
        nodes={nodes}
        setNodes={setNodes}
        textInput={textInput}
        setTextInput={setTextInput}
        setTell={setTell}
      />
      <Grid name={textInput} nodes={nodes} setNodes={setNodes} />
      <div className="page">
        <h1>{tell}</h1>
      </div>
    </div>
  );
}

export default App;
