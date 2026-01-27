"use client"

import styled from "styled-components";

export const FooterComponente = styled.footer`
  color: ${(props) => props.theme.colors.white + 70};
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  font-weight: 400;
  line-height: 26px;
  font-size: 14px;
`;