"use client";

import styled from "styled-components";

export const CardContainerComponent = styled.div`
  width: 100%;
  max-width: 345px;
  height: 555px;
  background-color: ${(props) => props.theme.colors.surface};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px;
  border-radius: 8px;

  &:hover {
    scale: 105%;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;

  h2 {
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
  }

  p {
    font-weight: 300;
    font-size: 12px;
    line-height: 12px;
    margin-top: 10px;
    color: ${(props) => props.theme.colors.lightGray};

    height: 80px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  div {
    display: flex;
    gap: 3.5px;
    height: 29px;
    margin-top: 5px;
    margin-bottom: 24px;

    span {
      font-weight: 600;
    }
  }
`;
