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

import ellipse from "../../public/images/testellipse.png";
import trash from "../../public/images/Group 223.png";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../store/cartSlice";

interface CartItem {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  quantity: number;
}

const CardSidebar = ({ product }: { product: CartItem }) => {
  const dispatch = useDispatch();

  return (
    <SidebarCard>
      <ImageContainer>
        <Image src={product.image} alt={product.name} width={161} height={161} />
      </ImageContainer>

      <Info>
        <div>
          <Title>{product.name}</Title>
          <Description>{product.description}</Description>

          <Price>
            <Image src={ellipse} alt="ethereum icon" width={30} height={30} />
            <span>{parseFloat(product.price).toFixed(2)} ETH</span>
          </Price>
        </div>

        <Item>
          <Quantity>
            <Select>
              <span onClick={() => dispatch(updateQuantity({ id: product.id, quantity: product.quantity - 1 }))}>−</span>
              <span>{product.quantity}</span>
              <span onClick={() => dispatch(updateQuantity({ id: product.id, quantity: product.quantity + 1 }))}>+</span>
            </Select>
          </Quantity>

          <DeleteButton onClick={() => dispatch(removeFromCart(product.id))}>
            <Image src={trash} alt="Deletar item" width={24} height={24} />
          </DeleteButton>
        </Item>
      </Info>
    </SidebarCard>
  );
};

export default CardSidebar;
