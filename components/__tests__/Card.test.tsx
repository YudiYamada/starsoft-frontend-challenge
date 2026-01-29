import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Card from "../Card";
import { store } from "../../store";
import { clearCart } from "../../store/cartSlice";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

const product = {
  id: 10,
  name: "Test NFT",
  description: "desc",
  image: "/test.png",
  price: "3.5",
};

describe("Card component", () => {
  beforeEach(() => {
    store.dispatch(clearCart());
  });

  it("dispatches addToCart when Comprar is clicked", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Card product={product} />
        </ThemeProvider>
      </Provider>,
    );

    const button = screen.getByText(/Comprar/i);
    fireEvent.click(button);

    const items = store.getState().cart.items;
    expect(items).toHaveLength(1);
    expect(items[0].id).toBe(10);
    expect(items[0].quantity).toBe(1);
  });
});
