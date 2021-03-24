import React from "react";
import minus from "./../assets/img/btn-minus.svg";
import plus from "./../assets/img/btn-plus.svg";

const Cart = props => {
  const handleRemoveQuantity = index => {
    let newCart = [...props.cart];
    newCart[index].quantity -= 1;
    if (newCart[index].quantity === 0) {
      newCart.splice(index, 1);
      props.setCart(newCart);
    } else {
      props.setCart(newCart);
    }
  };

  const handleAddQuantity = index => {
    let newCart = [...props.cart];
    newCart[index].quantity += 1;
    props.setCart(newCart);
  };

  let subtotal = 0;
  let total = 0;
  let deliveryFees = 2.5;

  for (let i = 0; i < props.cart.length; i++) {
    subtotal += Number(props.cart[i].price) * props.cart[i].quantity;
  }

  total = Number(subtotal) + Number(deliveryFees);

  return (
    <div className="md:sticky top-5 bg-white rounded md:mt-8 p-4 mb-8">
      <button
        className="btn w-full mb-4"
        disabled={props.cart.length === 0 ? true : null}
      >
        Valider mon panier
      </button>
      {props.cart.length > 0 && (
        <>
          <div className="max-h-60 overflow-y-scroll">
            {props.cart.map((item, index) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-9 items-start"
                  data-testid="card-line"
                >
                  <div className="col-span-2 flex items-center mr-5">
                    <img
                      data-testid="minus-button"
                      onClick={() => handleRemoveQuantity(index)}
                      src={minus}
                      alt="minus"
                      className="cursor-pointer"
                      width="18"
                    />
                    <span
                      className="text_dark pb-0 px-2"
                      data-testid="quantity"
                    >
                      {item.quantity}
                    </span>
                    <img
                      data-testid="plus-button"
                      onClick={() => handleAddQuantity(index)}
                      src={plus}
                      alt="plus"
                      className="cursor-pointer"
                      width="18"
                    />
                  </div>
                  <p className="col-span-5 text_dark text-left leading-tight">
                    {item.title}
                  </p>
                  <p className="col-span-2 text-right text_dark">
                    {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                    &nbsp;€
                  </p>
                </div>
              );
            })}
          </div>
          <hr className="text-gray-border pb-3" />
          <div className="flex justify-between">
            <p className="text_dark">Sous-total</p>
            <p className="text_dark">
              {subtotal.toFixed(2).replace(".", ",")}&nbsp;€
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text_dark">Frais de livraison</p>
            <p className="text_dark">
              {deliveryFees.toFixed(2).replace(".", ",")}&nbsp;€
            </p>
          </div>
          <hr className="text-gray-border pb-3" />
          <div className="flex justify-between">
            <p className="font-medium text-lg text-gray-dark">Total</p>
            <p
              className="font-medium text-lg text-gray-dark"
              data-testid="cart-amount"
            >
              {total.toFixed(2).replace(".", ",")} €
            </p>
          </div>
        </>
      )}
      {props.cart.length === 0 && (
        <p className="text-center text-gray-default my-8">
          Votre panier est vide
        </p>
      )}
    </div>
  );
};

export default Cart;
