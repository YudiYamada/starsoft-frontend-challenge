"use client";

import { useState } from "react";
import Image from "next/image";
import bag from "../../public/images/bag.png";
import Sidebar from "../Sidebar";
import { CartContainerComponent } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const CartTrigger = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const items = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <CartContainerComponent
        as="button"
        onClick={toggleCart}
        aria-label="Abrir carrinho de compras"
      >
        {" "}
        <Image
          src={bag}
          alt="Ícone de sacola de compras"
          width={33}
          height={33}
        />{" "}
        <span aria-live="polite">{totalQuantity}</span>{" "}
      </CartContainerComponent>

      <Sidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default CartTrigger;
