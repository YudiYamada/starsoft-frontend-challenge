"use client";

import React from "react";
import { useProductsInfinite } from "@/hooks/useProducts";
import Button from "../Button";
import Card from "../Card";
import { CardContainer, FetchContainer, HeroComponent } from "./styles";
import { Product } from "@/types/product";

const Hero = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isPending,
    isError,
    isFetchingNextPage,
  } = useProductsInfinite();

  const products: Product[] =
    data?.pages.flatMap((page) => page.products) || [];
  const total = data?.pages[0]?.count || 0;
  const progress = total > 0 ? (products.length / total) * 100 : 0;

  if (isPending) {
    return (
      <HeroComponent>
        <p>Carregando...</p>
      </HeroComponent>
    );
  }

  if (isError) {
    return (
      <HeroComponent>
        <p>Erro ao carregar produtos</p>
      </HeroComponent>
    );
  }

  return (
    <HeroComponent>
      <CardContainer>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </CardContainer>

      <FetchContainer $progress={progress}>
        <div
          className="progress-track"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="progress-fill" />
        </div>

        {hasNextPage ? (
          <Button
            text={isFetchingNextPage ? "Carregando..." : "Carregar mais"}
            $variant="secondary"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          />
        ) : (
          <Button text="Você já viu tudo" $variant="secondary" disabled />
        )}
      </FetchContainer>
    </HeroComponent>
  );
};

export default Hero;
