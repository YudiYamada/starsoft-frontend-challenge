import Image from "next/image";
import {
  SidebarCard,
  Info,
  Title,
  Description,
  Price,
  Quantity,
  Select,
  DeleteButton,
  ImageContainer,
  Item,
} from "./styles";

import Test from "../../public/images/teste.png";
import ellipse from "../../public/images/testellipse.png";
import trash from "../../public/images/Group 223.png";

const CardSidebar = () => {
  return (
    <SidebarCard>
      <ImageContainer>
        <Image src={Test} alt="Item do Carrinho" width={161} height={161} />
      </ImageContainer>

      <Info>
        <div>
          <Title>Item 2</Title>
          <Description>
            Redesigned from scratch and completely revised.
          </Description>

          <Price>
            <Image src={ellipse} alt="ethereum icon" width={30} height={30} />
            <span>12 ETH</span>
          </Price>
        </div>

        <Item>
          <Quantity>
            <Select>
              <span>−</span>
              <span>99</span>
              <span>+</span>
            </Select>
          </Quantity>

          <DeleteButton>
            <Image src={trash} alt="Deletar item" width={24} height={24} />
          </DeleteButton>
        </Item>
      </Info>
    </SidebarCard>
  );
};

export default CardSidebar;
