import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import CardSidebar from "../CardSidebar";
import { store } from "../../store";
import { clearCart, addToCart } from "../../store/cartSlice";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

const product = {
  id: 5,
  name: "Sidebar Item",
  description: "Desc",
  image: "/img.png",
  price: "2.00",
  quantity: 2,
};

describe("CardSidebar component", () => {
  beforeEach(() => {
    store.dispatch(clearCart());
    store.dispatch(addToCart({ ...product }));
  });

  it("renders product info and dispatches quantity updates and removal", () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CardSidebar product={product} />
        </ThemeProvider>
      </Provider>,
    );

    expect(screen.getByText("Sidebar Item")).toBeInTheDocument();
    expect(screen.getByText("Desc")).toBeInTheDocument();
    expect(screen.getByText(/2.00 ETH/i)).toBeInTheDocument();

    const increase = screen.getByLabelText("Aumentar quantidade");
    fireEvent.click(increase);
    let item = store.getState().cart.items.find((i) => i.id === 5);
    expect(item?.quantity).toBe(3);

    const decrease = screen.getByLabelText("Diminuir quantidade");
    fireEvent.click(decrease);
    item = store.getState().cart.items.find((i) => i.id === 5);
    // After using the store quantity for updates, decreasing returns to 2
    expect(item?.quantity).toBe(2);

    const remove = screen.getByLabelText(`Remover ${product.name} do carrinho`);
    fireEvent.click(remove);
    expect(store.getState().cart.items.find((i) => i.id === 5)).toBeUndefined();
  });
});
