import React from "react";

function Girls(props) {
  return (
    <span className="girls" onClick={(e) => props.onClick(e.target.value)}>
      {props.name}
    </span>
  );
}

export default Girls;
