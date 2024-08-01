import styled from "styled-components";
import { ButtonProps } from ".";

const Button = styled.button<ButtonProps>`
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  width: 100%;

  ${(props) =>
    props.variant === "secondary"
      ? {
          backgroundColor: `${props.theme.colors.WHITE}`,
          color: `${props.theme.colors.SECONDARY}`,
          border: `1px solid ${props.theme.colors.SECONDARY}`,
        }
      : {
          backgroundColor: `${props.theme.colors.PRIMARY}`,
          color: `${props.theme.colors.WHITE}`,
          border: "none",
        }}

  &:hover, &:disabled {
    background-color: ${(props) =>
      props.variant === "secondary" ? props.theme.colors.LIGHT : props.theme.colors.PRIMARY_LIGHT};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    font-size: 14px;
  }
`;

export { Button };
