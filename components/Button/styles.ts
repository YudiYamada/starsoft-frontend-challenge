"use client";
import styled from "styled-components";

interface ButtonVariantProps {
  $variant?: "primary" | "secondary";
}

export const ButtonComponent = styled.button<ButtonVariantProps>`
  height: 66px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 16px;
  transition: 0.2s;
  width: 100%;

  /* Lógica da Variante */
  background-color: ${(props) =>
    props.$variant === "secondary"
      ? `${props.theme.colors.gray}40`
      : props.theme.colors.primary};

  color: ${(props) => props.theme.colors.white};

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;
