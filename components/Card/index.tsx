"use client";

import Image from "next/image";
import ellipse from "../../public/images/testellipse.png";
import { CardContainerComponent, DescriptionContainer } from "./styles";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import Link from "next/link";
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

const Card = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      }),
    );
  };

  return (
    <CardContainerComponent>
      <Link
        href={`/nft/${product.id}`}
        aria-label={`Ver detalhes de ${product.name}`}
      >
        <Image
          src={product.image}
          alt={`Imagem do produto ${product.name}`}
          width={296}
          height={258}
        />
      </Link>

      <DescriptionContainer>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div>
          <Image src={ellipse} alt="Ícone de moeda Ethereum" />
          <span>{parseFloat(product.price).toFixed(2)} ETH</span>
        </div>
        <Button text="Comprar" onClick={handleAddToCart} />
      </DescriptionContainer>
    </CardContainerComponent>
  );
};

export default Card;
