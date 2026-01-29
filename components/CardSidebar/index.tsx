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
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../../store/cartSlice";
import { RootState } from "@/store";

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
  const currentQuantity = useSelector(
    (state: RootState) =>
      state.cart.items.find((i) => i.id === product.id)?.quantity ??
      product.quantity,
  );

  return (
    <SidebarCard>
      <ImageContainer>
        <Image
          src={product.image}
          alt={product.name}
          width={161}
          height={161}
        />
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
              <button
                aria-label="Diminuir quantidade"
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: product.id,
                      quantity: Math.max(0, currentQuantity - 1),
                    }),
                  )
                }
              >
                −
              </button>
              <span>{currentQuantity}</span>
              <button
                aria-label="Aumentar quantidade"
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: product.id,
                      quantity: currentQuantity + 1,
                    }),
                  )
                }
              >
                +
              </button>
            </Select>
          </Quantity>

          <DeleteButton
            aria-label={`Remover ${product.name} do carrinho`}
            onClick={() => dispatch(removeFromCart(product.id))}
          >
            <Image src={trash} alt="Ícone de lixeira" width={24} height={24} />
          </DeleteButton>
        </Item>
      </Info>
    </SidebarCard>
  );
};

export default CardSidebar;
