import Button from "../Button/indext";
import Card from "../Card";
import { CardContainer, FetchContainer, HeroComponent } from "./styles";

const Hero = () => {
  return (
    <HeroComponent>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
      
      <FetchContainer>
        <span>texto escondido hehe</span>
        <Button text="Carregar mais" variant="secondary" />
      </FetchContainer>
    </HeroComponent>
  );
};

export default Hero;
