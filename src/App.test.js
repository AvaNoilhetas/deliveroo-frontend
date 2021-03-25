import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("Are menus display", async () => {
  render(<App />);

  const menuItemCard = await screen.findAllByTestId("menu-item-card");
  expect(menuItemCard.length).toBeGreaterThan(1);
});

test("Add meal to cart", async () => {
  render(<App />);

  // Page loading
  const menuItemCard = await screen.findAllByTestId("menu-item-card");

  // Click on meals
  userEvent.click(menuItemCard[0]);
  userEvent.click(menuItemCard[1]);

  // Check that the basket contains dishes
  const cardLines = screen.getAllByTestId("card-line");
  expect(cardLines.length).toEqual(2);

  const plusButton = screen.getAllByTestId("plus-button");
  const minusButton = screen.getAllByTestId("minus-button");
  const quantity = screen.getAllByTestId("quantity");
  const cardAmount = screen.getByTestId("cart-amount");

  // Check first quantity
  expect(quantity[0].textContent).toEqual("1");
  const total1 = Number(
    cardAmount.textContent.replace(" €", "").replace(",", ".")
  );
  expect(total1).toEqual(52.5);

  // Add one meal
  userEvent.click(plusButton[0]);

  // Check quantity after click
  expect(quantity[0].textContent).toEqual("2");
  const total2 = Number(
    cardAmount.textContent.replace(" €", "").replace(",", ".")
  );
  expect(total2).toEqual(77.5);

  // Delete one meal
  userEvent.click(minusButton[0]);

  // Check quantity after click
  expect(quantity[0].textContent).toEqual("1");
  const total3 = Number(
    cardAmount.textContent.replace(" €", "").replace(",", ".")
  );
  expect(total3).toEqual(52.5);
});
