import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NFTDetailContainer } from "./styles";
import Image from "next/image";
import ellipse from "../../../public/images/testellipse.png";
import { Product } from "@/types/product";
import NFTActions from "@/components/NFTActions";

const API_URL = "https://api-challenge.starsoft.games/api/v1/products";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function NFTPage({ params }: PageProps) {
  const { id } = await params;

  const res = await fetch(`${API_URL}?page=1&rows=50&sortBy=id&orderBy=ASC`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Falha ao buscar dados da API");
  }

  const data = await res.json();
  const products: Product[] = data?.products || [];
  const nft = products.find((p) => p.id === Number(id));

  if (!nft) {
    return (
      <>
        <Header />
        <NFTDetailContainer>
          <h1>NFT não encontrado</h1>
          <p>O item que você tentou acessar não existe.</p>
        </NFTDetailContainer>
        <Footer />
      </>
    );
  }

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
            priority
          />
        </section>

        <section>
          <h1>{nft.name}</h1>
          <p>{nft.description}</p>
          <div className="price">
            <Image src={ellipse} alt="Ícone de moeda" />{" "}
            <span>{parseFloat(nft.price).toFixed(2)} ETH</span>
          </div>

          <NFTActions nft={nft} />
        </section>
      </NFTDetailContainer>
      <Footer />
    </>
  );
}
