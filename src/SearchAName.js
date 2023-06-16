import React from "react";

function SearchName(props) {
  return (
    <input
      type="text"
      onChange={(e) => {
        props.getInput(e.target.value);
      }}
    />
  );
}

export default SearchName;
