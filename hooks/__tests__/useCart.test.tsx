import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { store } from "../../store";

const TestComponent = () => {
  const { items, addItem, removeItem, getTotal, getCount } = useCart();

  return (
    <div>
      <div data-testid="count">{getCount()}</div>
      <div data-testid="total">{getTotal().toFixed(2)}</div>
      <button
        onClick={() =>
          addItem(
            { id: 1, name: "A", description: "d", image: "i", price: "2.5" },
            2,
          )
        }
      >
        add
      </button>
      <button onClick={() => removeItem(1)}>remove</button>
      <div data-testid="items">{items.length}</div>
    </div>
  );
};

describe("useCart hook integration", () => {
  it("adds and removes items and computes totals/counts", () => {
    render(
      <Provider store={store}>
        <TestComponent />
      </Provider>,
    );

    expect(screen.getByTestId("items").textContent).toBe("0");
    fireEvent.click(screen.getByText("add"));
    expect(screen.getByTestId("items").textContent).toBe("1");
    expect(screen.getByTestId("count").textContent).toBe("2");
    expect(screen.getByTestId("total").textContent).toBe("5.00");

    fireEvent.click(screen.getByText("remove"));
    expect(screen.getByTestId("items").textContent).toBe("0");
    expect(screen.getByTestId("count").textContent).toBe("0");
    expect(screen.getByTestId("total").textContent).toBe("0.00");
  });
});
import { renderHook, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/store/cartSlice";
import { useCart } from "../useCart";
import { Product } from "@/types/product";

const createTestStore = () =>
  configureStore({
    reducer: { cart: cartReducer },
  });

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <Provider store={createTestStore()}>{children}</Provider>
);

const mockProduct: Product = {
  id: 1,
  name: "NFT Test",
  description: "Descrição teste",
  image: "test.png",
  price: "2.5",
};

describe("useCart hook", () => {
  it("should add item to cart", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem(mockProduct, 1);
    });

    expect(result.current.items.length).toBe(1);
    expect(result.current.items[0].quantity).toBe(1);
  });

  it("should calculate total correctly", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem(mockProduct, 2); // 2 * 2.5 = 5
    });

    expect(result.current.getTotal()).toBe(5);
  });
});

it("should remove item from cart", () => {
  const { result } = renderHook(() => useCart(), { wrapper });

  act(() => {
    result.current.addItem(mockProduct, 1);
    result.current.removeItem(mockProduct.id);
  });

  expect(result.current.items.length).toBe(0);
});

it("should return correct count of items", () => {
  const { result } = renderHook(() => useCart(), { wrapper });

  act(() => {
    result.current.addItem(mockProduct, 2); // adiciona 2 unidades
  });

  expect(result.current.getCount()).toBe(2);

  act(() => {
    result.current.addItem(mockProduct, 3); // adiciona mais 3 unidades
  });

  expect(result.current.getCount()).toBe(5);
});
