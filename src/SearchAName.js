import React from "react";

function SearchName(props) {
  return (
    <input
      className="search"
      type="text"
      onChange={(e) => {
        props.getInput(e.target.value);
      }}
    />
  );
}

export default SearchName;
