"use client"

import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 35px;
  padding-bottom: 29px;
  padding-inline: 41px;
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.colors.surface};
`;

export const CartContainerComponent = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;
    
    &:hover {
        cursor: pointer;
    }
`