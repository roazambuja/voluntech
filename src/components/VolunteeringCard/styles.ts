import styled from "styled-components";

const Card = styled.button<{ color: string }>`
  display: flex;
  width: fit-content;
  height: fit-content;
  white-space: nowrap;
  gap: 6px;
  color: ${(props) => props.theme.colors.WHITE};
  align-items: center;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  padding: 8px 10px;
  border: none;
  border-radius: 18px;
  background-color: ${(props) => props.color};

  @media (max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
    font-size: 14px;
  }
`;

const Icon = styled.svg`
  height: 16px;
  width: 16px;

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    height: 14px;
    width: 14px;
  }
`;

export { Card, Icon };
