"use client";

import { useParams, useRouter } from "next/navigation";
import { useProductsAll } from "@/hooks/useProducts";
import { Product } from "@/types/product";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button/indext";
import { NFTDetailContainer } from "./styles";
import Image from "next/image";
import ellipse from "../../../public/images/testellipse.png";
import { useCart } from "@/hooks/useCart";

export default function NFTPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addItem } = useCart();

  const { data, isLoading, isError } = useProductsAll(50);

  if (isLoading) return <p>Carregando NFT...</p>;
  if (isError) return <p>Erro ao carregar NFT</p>;

  const products: Product[] = data?.products || [];
  const nft = products.find((p) => p.id === Number(id));

  if (!nft) {
    return (
      <>
        <Header />
        <NFTDetailContainer>
          <h1>NFT não encontrado</h1>
          <p>
            O item que você tentou acessar não existe ou não está disponível.
          </p>
          <Button
            text="Voltar"
            $variant="secondary"
            onClick={() => router.back()}
          />
        </NFTDetailContainer>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    addItem(nft, 1);
  };

  return (
    <>
      <Header />
      <NFTDetailContainer>
        <section>
          <Image
            src={nft.image}
            alt={`Imagem do NFT ${nft.name}`}
            width={400}
            height={400}
          />
        </section>

        <section>
          <h1>{nft.name}</h1>
          <p>{nft.description}</p>
          <p className="price">
            <Image src={ellipse} alt="Ícone de moeda Ethereum" />{" "}
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
