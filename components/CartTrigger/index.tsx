"use client";

import { useState } from "react";
import Image from "next/image";
import bag from "../../public/images/bag.png";
import Sidebar from "../Sidebar";
import { CartContainerComponent } from "./styles";
import { useCart } from "@/hooks/useCart";

const CartTrigger = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCount } = useCart();

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <CartContainerComponent onClick={toggleCart}>
        <Image src={bag} alt="bag" width={33} height={33} />
        <span>{getCount()}</span>
      </CartContainerComponent>

      <Sidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default CartTrigger;
