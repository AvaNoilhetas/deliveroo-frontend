import React from "react";

const Restaurant = props => {
  return (
    <div className="container items-stretch grid md:grid-cols-3 gap-5 py-8">
      <div className="col-span-2">
        <h1 className="title-1">{props.name}</h1>
        <p className="subtitle">{props.description}</p>
      </div>
      <img
        className="md:col-span-1 col-span-2 rounded object-cover"
        src={props.picture}
        alt={props.name}
      />
    </div>
  );
};

export default Restaurant;
