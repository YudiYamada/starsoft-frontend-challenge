"use client";

import styled from "styled-components";

export const SidebarCard = styled.div`
  display: flex;
  flex-direction: column; /* Padrão mobile: um embaixo do outro */
  background-color: #2b2b2b;
  border-radius: 8px;
  gap: 16px;
  padding: 16px;
  margin-bottom: 16px;
  width: 100%;
  position: relative;

  /* Desktop: Acima de 768px volta a ser horizontal */
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    padding: 24px;
    gap: 20px;
  }
`;

export const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 100%; /* Imagem larga no mobile */
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 161px;
    height: 161px;
  }

  img {
    object-fit: cover;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 18px; /* Reduzi um pouco para mobile */
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: ${(props) => props.theme.colors.lightGray};
  margin: 8px 0;

  /* Line-clamp para não empurrar o card infinitamente */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;

  span {
    font-weight: 700;
    font-size: 18px;
    color: ${(props) => props.theme.colors.white};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-bottom: 16px;
    span {
      font-size: 22px;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Quantity = styled.div`
  display: flex;
  justify-content: flex-start; /* Alinha à esquerda no mobile */
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    justify-content: space-between;
    margin-bottom: 0;
  }
`;

export const Select = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 8px;
  width: 110px;
  height: 40px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 130px;
    height: 45px;
  }

  span {
    cursor: pointer;
    font-size: 18px;
    color: ${(props) => props.theme.colors.white};
    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const DeleteButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  right: 16px;
  bottom: 16px;
  
  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    right: 20px;
    bottom: 20px;
  }
`;
