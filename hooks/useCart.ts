"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { addToCart, removeFromCart } from "@/store/cartSlice";
import { CartItem, Product } from "@/types/product";

export function useCart() {
  const dispatch = useDispatch();
  const items: CartItem[] = useSelector((state: RootState) => state.cart.items);

  const addItem = (product: Product, quantity: number = 1) => {
    dispatch(addToCart({ ...product, quantity }));
  };

  const removeItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const getTotal = () =>
    items.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);

  const getCount = () => items.reduce((acc, item) => acc + item.quantity, 0);

  return {
    items,
    addItem,
    removeItem,
    getTotal,
    getCount,
  };
}
