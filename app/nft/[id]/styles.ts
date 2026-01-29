"use client";

import styled from "styled-components";

export const NFTDetailContainer = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 8px;
  gap: 30px;
  margin: 30px auto;

  h1 {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.white};
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    margin-top: 15px;
    color: ${(props) => props.theme.colors.lightGray};
    max-width: 600px;
  }

  .price {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary};
  }

  img {
    border-radius: 8px;
    margin-bottom: 20px;
    object-fit: cover;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 18px;
    }
    .price {
      font-size: 20px;
    }
  }
`;
