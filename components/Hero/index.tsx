"use client";

import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import Button from "../Button/indext";
import Card from "../Card";
import { CardContainer, FetchContainer, HeroComponent } from "./styles";

const Hero = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isPending,
    isError,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam = 1 }) =>
      fetch(
        `https://api-challenge.starsoft.games/api/v1/products?page=${pageParam}&rows=8&sortBy=id&orderBy=ASC`,
      ).then((res) => res.json()),
    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
      const loadedSoFar = allPages.length * 8;
      return loadedSoFar < lastPage.count ? allPages.length + 1 : undefined;
    },
  });

  const products = data?.pages.flatMap((page) => page.products) || [];
  const total = data?.pages[0]?.count || 0;
  const progress = total > 0 ? (products.length / total) * 100 : 0;

  if (isPending)
    return (
      <HeroComponent>
        <p>Carregando...</p>
      </HeroComponent>
    );
  if (isError)
    return (
      <HeroComponent>
        <p>Erro ao carregar produtos</p>
      </HeroComponent>
    );

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
