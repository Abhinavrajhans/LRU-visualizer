import React from "react";
import "../styles/grid.css";
import Element from "./element";
function Grid({ nodes, index }) {
  return (
    <div className="hello">
      {nodes.map((node) => (
        <Element name={node} key={node.id} />
      ))}
    </div>
  );
}
export default Grid;
