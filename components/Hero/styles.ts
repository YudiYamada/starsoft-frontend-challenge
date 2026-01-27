"use client";

import styled from "styled-components";

export const HeroComponent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  flex: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    max-width: ${(props) => props.theme.containers.sm};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: ${(props) => props.theme.containers.md};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    max-width: ${(props) => props.theme.containers.lg};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.sl}) {
    max-width: ${(props) => props.theme.containers.sl};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    max-width: ${(props) => props.theme.containers.xl};
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  justify-items: center;
`;

export const FetchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px auto;
  max-width: 403px;
  gap: 11px;

  span {
    background-color: ${(props) => props.theme.colors.primary};
    width: 100%;
    color: transparent;
    border-radius: 8px;
  }
`;
