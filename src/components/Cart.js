import React, { useState, useEffect } from "react";
import minus from "./../assets/img/btn-minus.svg";
import plus from "./../assets/img/btn-plus.svg";

const Cart = props => {
  return (
    <div className="md:sticky top-5 bg-white rounded md:mt-8 p-4 mb-8">
      <button className="btn w-full mb-4">Valider mon panier</button>
      {props.cart.map((item, index) => {
        return (
          <div key={index} className="grid grid-cols-9 items-start">
            <div className="col-span-2 flex items-center mr-5">
              <img src={minus} alt="minus" width="18" />
              <span className="text_dark pb-0 px-2">1</span>
              <img src={plus} alt="plus" width="18" />
            </div>
            <p className="col-span-5 text_dark text-left leading-tight">
              {item.title}
            </p>
            <p className="col-span-2 text-right text_dark">
              {item.price}&nbsp;€
            </p>
          </div>
        );
      })}
      <hr className="text-gray-border pb-3" />
      <div className="flex justify-between">
        <p className="text_dark">Sous-total</p>
        <p className="text_dark">10&nbsp;€</p>
      </div>
      <div className="flex justify-between">
        <p className="text_dark">Frais de livraison</p>
        <p className="text_dark">10&nbsp;€</p>
      </div>
      <hr className="text-gray-border pb-3" />
      <div className="flex justify-between">
        <p className="font-medium text-lg text-gray-dark">Total</p>
        <p className="font-medium text-lg text-gray-dark">10&nbsp;€</p>
      </div>
    </div>
  );
};

export default Cart;
