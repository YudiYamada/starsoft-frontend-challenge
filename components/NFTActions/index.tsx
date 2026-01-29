"use client";

import React from "react";
import Button from "../Button";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";

const NFTActions = ({ nft }: { nft: Product }) => {
  const { addItem } = useCart();
  const router = useRouter();

  const handleAddToCart = () => addItem(nft, 1);

  return (
    <>
      <Button text="Adicionar ao carrinho" onClick={handleAddToCart} />
      <Button
        text="Voltar"
        $variant="secondary"
        onClick={() => router.back()}
      />
    </>
  );
};

export default NFTActions;
