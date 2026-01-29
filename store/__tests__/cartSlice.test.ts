import cartReducer, {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../cartSlice";

describe("cartSlice reducer", () => {
  const initialState = { items: [] };

  it("should return the initial state", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle addToCart for new item", () => {
    const next = cartReducer(
      initialState,
      addToCart({
        id: 1,
        name: "A",
        description: "d",
        image: "i",
        price: "1.0",
        quantity: 2,
      }),
    );
    expect(next.items).toHaveLength(1);
    expect(next.items[0].quantity).toBe(2);
  });

  it("should increase quantity when adding existing item", () => {
    const state = {
      items: [
        {
          id: 1,
          name: "A",
          description: "d",
          image: "i",
          price: "1.0",
          quantity: 2,
        },
      ],
    };
    const next = cartReducer(
      state,
      addToCart({
        id: 1,
        name: "A",
        description: "d",
        image: "i",
        price: "1.0",
        quantity: 3,
      }),
    );
    expect(next.items).toHaveLength(1);
    expect(next.items[0].quantity).toBe(5);
  });

  it("should remove item", () => {
    const state = {
      items: [
        {
          id: 1,
          name: "A",
          description: "d",
          image: "i",
          price: "1.0",
          quantity: 2,
        },
      ],
    };
    const next = cartReducer(state, removeFromCart(1));
    expect(next.items).toHaveLength(0);
  });

  it("should update quantity", () => {
    const state = {
      items: [
        {
          id: 1,
          name: "A",
          description: "d",
          image: "i",
          price: "1.0",
          quantity: 2,
        },
      ],
    };
    const next = cartReducer(state, updateQuantity({ id: 1, quantity: 7 }));
    expect(next.items[0].quantity).toBe(7);
  });

  it("should clear cart", () => {
    const state = {
      items: [
        {
          id: 1,
          name: "A",
          description: "d",
          image: "i",
          price: "1.0",
          quantity: 2,
        },
      ],
    };
    const next = cartReducer(state, clearCart());
    expect(next.items).toHaveLength(0);
  });
});
