"use client";

import { useState } from "react";
import Image from "next/image";
import bag from "../../public/images/bag.png";
import Sidebar from "../Sidebar";
import { CartContainerComponent } from "./styles";

const CartTrigger = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <CartContainerComponent onClick={toggleCart}>
        <Image src={bag} alt="bag" />
        <span>0</span>
      </CartContainerComponent>

      <Sidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default CartTrigger;
