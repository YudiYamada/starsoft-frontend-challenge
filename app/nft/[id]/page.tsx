"use client";

import { useParams, useRouter } from "next/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import { NFTDetailContainer } from "./styles";
import Header from "@/components/Header";
import Button from "@/components/Button/indext";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import ellipse from "../../../public/images/testellipse.png";
import Footer from "@/components/Footer";

export default function NFTPage() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useInfiniteQuery({
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

  if (isLoading) return <p>Carregando NFT...</p>;
  if (isError) return <p>Erro ao carregar NFT</p>;

  const products = data?.pages.flatMap((page) => page.products) || [];
  const nft = products.find((p: any) => String(p.id) === String(id));

  if (!nft) {
    return <p>NFT não encontrado</p>;
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...nft,
        quantity: 1,
      }),
    );
  };

  return (
    <>
      <Header />
      <NFTDetailContainer>
        <section className="image-block">
          <Image
            src={nft.image}
            alt={`Imagem do NFT ${nft.name}`}
            width={400}
            height={400}
          />
        </section>

        <section className="info-block">
          <h1>{nft.name}</h1>
          <p>{nft.description}</p>
          <p className="price">
            <Image src={ellipse} alt="Ícone de moeda Ethereum" />
            {parseFloat(nft.price).toFixed(2)} ETH
          </p>

          <Button text="Adicionar ao carrinho" onClick={handleAddToCart} />
          <Button
            text="Voltar"
            $variant="secondary"
            onClick={() => router.back()}
          />
        </section>
      </NFTDetailContainer>

      <Footer />
    </>
  );
}
