import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CartTrigger from "../CartTrigger";
import { store } from "../../store";
import { clearCart, addToCart } from "../../store/cartSlice";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

describe("CartTrigger component", () => {
  beforeEach(() => {
    store.dispatch(clearCart());
  });

  it("shows the correct count from the store", () => {
    store.dispatch(
      addToCart({
        id: 1,
        name: "A",
        description: "d",
        image: "i",
        price: "1.0",
        quantity: 2,
      }),
    );
    store.dispatch(
      addToCart({
        id: 2,
        name: "B",
        description: "d",
        image: "i",
        price: "2.0",
        quantity: 1,
      }),
    );

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CartTrigger />
        </ThemeProvider>
      </Provider>,
    );

    // getCount renders inside a span; find by text '3'
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});
