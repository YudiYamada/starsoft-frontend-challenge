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
import Button from "../Button";
import { useCart } from "@/hooks/useCart";
import { motion } from "framer-motion";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MotionSidebar = motion(SidebarContainer as any);

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { items, getTotal } = useCart();

  return (
    <MotionSidebar
      initial={{ x: "100%" }}
      animate={isOpen ? { x: 0 } : { x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      $isOpen={isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Carrinho de compras"
    >
      <SidebarHeader>
        <CloseButton onClick={onClose} aria-label="Fechar carrinho">
          <Image src={ArrowLeft} alt="Voltar" width={24} height={24} />
        </CloseButton>
        <SidebarTitle as="h2">Mochila de Compras</SidebarTitle>
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
            {getTotal().toFixed(2)} ETH
          </PriceContainer>
        </TotalContainer>
        <Button text="FINALIZAR COMPRA" />
      </SidebarFooter>
    </MotionSidebar>
  );
};

export default Sidebar;
