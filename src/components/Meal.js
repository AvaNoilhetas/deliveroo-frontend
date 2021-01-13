import React from "react";

const Meal = props => {
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div>
          <p>{props.price}</p>
          <p>{props.popular}</p>
        </div>
      </div>
      <div>
        <img width="200px" src={props.picture} alt={props.title} />
      </div>
    </div>
  );
};

export default Meal;
