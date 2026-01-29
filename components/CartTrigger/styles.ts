"use client"

import styled from "styled-components";

export const CartContainerComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.white};

  &:hover {
    cursor: pointer;
  }
`;
