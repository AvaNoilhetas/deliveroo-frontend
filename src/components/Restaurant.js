import React from "react";

const Restaurant = props => {
  return (
    <div>
      <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
      <div>
        <img src={props.picture} alt={props.name} />
      </div>
    </div>
  );
};

export default Restaurant;
