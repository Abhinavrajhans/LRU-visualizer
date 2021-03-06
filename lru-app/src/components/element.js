import React from "react";
import "../styles/element.css";
function Element({ name }) {
  return (
    <div
      className="hero"
      style={{ backgroundColor: `${name.istrue}`, color: `${name.color}` }}
    >
      <div className="index">
        <h1>{name.message}</h1>
      </div>
    </div>
  );
}
export default Element;
