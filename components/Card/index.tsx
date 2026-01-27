import Image from "next/image";
import test from "../../public/images/teste.png";
import ellipse from "../../public/images/testellipse.png";
import {
  CardContainerComponent,
  DescriptionContainer,
  ImageContainer,
} from "./styles";
import Button from "../Button/indext";

const Card = () => {
  return (
    <CardContainerComponent>
      <ImageContainer>
        <Image src={test} alt="imagem de teste" />
      </ImageContainer>
      <DescriptionContainer>
        <h2>Title</h2>
        <p>Description</p>
        <div>
          <Image src={ellipse} alt="imagem de teste" />
          <span>32 ETH</span>
        </div>
        <Button text="Comprar"/>
      </DescriptionContainer>
    </CardContainerComponent>
  );
};

export default Card;
