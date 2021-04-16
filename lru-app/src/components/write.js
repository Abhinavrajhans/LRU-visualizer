import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/write.css";
const Write = ({ nodes, setNodes, textInput, setTextInput, setTell }) => {
  const inputhandler = (e) => {
    e.preventDefault();
    setTextInput(e.target.value);
  };
  const submitSearch = async (e) => {
    e.preventDefault();
    let n = nodes.length,
      flag = -1,
      number = parseInt(textInput);
    console.log(typeof n);
    for (let i = 0; i < n; i++) {
      let m = parseInt(nodes[i].message);
      if (m === number) {
        flag = i;
        console.log(`yes git is:${i}`);
        break;
      }
    }
    if (flag === -1) {
      setTell("PAGE FAULT");
      if (nodes.length > 4) {
        for (let i = 0; i < n - 1; i++) {
          nodes[i].message = nodes[i + 1].message;
          nodes[i].id = nodes[i + 1].id;
          nodes[i].index = i;
          nodes[i].istrue = "red";
        }
        nodes[n - 1].message = textInput;
        nodes[n - 1].id = uuidv4();
        nodes[n - 1].index = n - 1;
        nodes[n - 1].istrue = "green";
      } else
        setNodes([
          ...nodes,
          {
            message: textInput,
            id: uuidv4(),
            index: nodes.length,
            istrue: "white",
          },
        ]);
    } else {
      setTell("PAGE HIT");

      for (let i = flag; i < n - 1; i++) {
        nodes[i].message = nodes[i + 1].message;
        nodes[i].id = nodes[i + 1].id;
        nodes[i].index = i;
        nodes[i].istrue = "red";
      }
      nodes[n - 1].message = textInput;
      nodes[n - 1].id = uuidv4();
      nodes[n - 1].index = n - 1;
      nodes[n - 1].istrue = "green";
    }
    setTextInput("");
  };

  return (
    <div className="heroo">
      <form className="te">
        <input value={textInput} onChange={inputhandler}></input>
        <button onClick={submitSearch} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Write;
