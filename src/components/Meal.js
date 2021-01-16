import React from "react";
import star from "./../assets/img/star.svg";

const Meal = props => {
  return (
    <div className="bg-white rounded items-stretch grid grid-cols-5 md:gap-10 gap-3 min-h-10 p-4">
      <div className={props.picture ? "col-span-3" : "col-span-5"}>
        <h3 className="title-3">{props.title}</h3>
        {props.description && (
          <p className="text text-justify">
            {props.description.length > 50
              ? props.description.substring(0, 50) + "..."
              : props.description}
          </p>
        )}
        <div className="md:flex">
          <p className="font-light text-lg text-gray-default md:pr-5">
            {props.price} €
          </p>
          {props.popular && (
            <div className="flex items-center">
              <img src={star} alt="popular" width="25" />
              <span className="text-orange font-extrabold text-sm pl-2">
                Populaire
              </span>
            </div>
          )}
        </div>
      </div>
      {props.picture && (
        <img
          className="col-span-2 rounded object-cover"
          src={props.picture}
          alt={props.title}
        />
      )}
    </div>
  );
};

export default Meal;
