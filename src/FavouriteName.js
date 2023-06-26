import React from "react";
import FavouriteChildName from "./favouriteChildName";

function FavouriteName(props) {
  if (props.favourite === "") {
    return (
      <div>
        <span className="favourite">My favourite Baby Names:</span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="favourite">
          My favourite Baby Names {props.favourite.name}:
        </span>
        <FavouriteChildName name={props.favourite} />
      </div>
    );
  }
}

export default FavouriteName;
