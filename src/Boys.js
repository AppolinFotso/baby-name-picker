import React from "react";

function Boys(props) {
  return (
    <span className="boys" onClick={(e) => props.onClick(e.target.value)}>
      {props.name}
    </span>
  );
}

export default Boys;
