"use client";

import {
  SidebarContainer,
  SidebarContent,
  CloseButton,
  SidebarHeader,
  SidebarTitle,
  SidebarFooter,
  TotalContainer,
  PriceContainer,
} from "./styles";

import CardSidebar from "../CardSidebar";
import ArrowLeft from "../../public/images/Arrow - Left.png";
import Ellipse from "../../public/images/testellipse.png";
import Image from "next/image";
import Button from "../Button/indext";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const items = useSelector((state: RootState) => state.cart.items);
  const total = items.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0,
  );

  return (
    <SidebarContainer
      $isOpen={isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Carrinho de compras"
    >
      {" "}
      <SidebarHeader>
        {" "}
        <CloseButton onClick={onClose} aria-label="Fechar carrinho">
          {" "}
          <Image src={ArrowLeft} alt="Voltar" width={24} height={24} />{" "}
        </CloseButton>{" "}
        <SidebarTitle as="h2">Mochila de Compras</SidebarTitle>{" "}
      </SidebarHeader>
      <SidebarContent>
        {items.map((item) => (
          <CardSidebar key={item.id} product={item} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <TotalContainer>
          <span>TOTAL</span>
          <PriceContainer>
            <Image src={Ellipse} alt="ethereum" width={16} height={16} />
            {total.toFixed(2)} ETH
          </PriceContainer>
        </TotalContainer>
        <Button text="FINALIZAR COMPRA" />
      </SidebarFooter>
    </SidebarContainer>
  );
};

export default Sidebar;
