"use client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

const API_URL = "https://api-challenge.starsoft.games/api/v1/products";

export function useProductsInfinite() {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam = 1 }) =>
      fetch(`${API_URL}?page=${pageParam}&rows=8&sortBy=id&orderBy=ASC`).then(
        (res) => res.json(),
      ),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const loadedSoFar = allPages.length * 8;
      return loadedSoFar < lastPage.count ? allPages.length + 1 : undefined;
    },
  });
}

export function useProductsAll(rows: number = 50) {
  return useQuery({
    queryKey: ["products-all"],
    queryFn: () =>
      fetch(`${API_URL}?page=1&rows=${rows}&sortBy=id&orderBy=ASC`).then(
        (res) => res.json(),
      ),
  });
}
