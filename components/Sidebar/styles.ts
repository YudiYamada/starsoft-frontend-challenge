"use client";

import styled from "styled-components";

export const SidebarContainer = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 679px;
  height: 100vh;
  background-color: #232323;
  z-index: 1000;
  padding: 40px;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
  transition: transform 0.4s ease-in-out;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};
`;

export const SidebarHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const CloseButton = styled.button`
  background: #373737;
  padding: 10px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const SidebarTitle = styled.span`
  font-weight: 600;
  font-size: 20px;
  color: ${(props) => props.theme.colors.white};
`;

export const SidebarContent = styled.div`
  flex: 1;
  overflow-y: auto;
  margin: 40px 0;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const SidebarFooter = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  span:first-child {
    font-weight: 400;
    color: ${(props) => props.theme.colors.white};
  }
`;

export const PriceContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 20px;
  color: ${(props) => props.theme.colors.white};
`;
