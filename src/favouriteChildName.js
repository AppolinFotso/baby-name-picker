import React from "react";

function FavouriteChildName(props) {
  return (
    <span className={props.name.sex === "m" ? "boys" : "girls"}>
      {props.name}
    </span>
  );
}

export default FavouriteChildName;
