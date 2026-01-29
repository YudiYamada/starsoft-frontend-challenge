import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Sidebar from "../Sidebar";
import { store } from "../../store";
import { clearCart, addToCart } from "../../store/cartSlice";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

describe("Sidebar component", () => {
  beforeEach(() => {
    store.dispatch(clearCart());
    store.dispatch(
      addToCart({
        id: 1,
        name: "A",
        description: "d",
        image: "i",
        price: "1.50",
        quantity: 2,
      }),
    );
    store.dispatch(
      addToCart({
        id: 2,
        name: "B",
        description: "d",
        image: "i",
        price: "3.00",
        quantity: 1,
      }),
    );
  });

  it("renders items from store and shows total", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Sidebar isOpen={true} onClose={() => {}} />
        </ThemeProvider>
      </Provider>,
    );

    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
    // Total = 1.50*2 + 3.00*1 = 6.00
    expect(screen.getByText(/6.00 ETH/)).toBeInTheDocument();
  });
});
