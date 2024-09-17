import styled from "styled-components";
import { ButtonProps } from ".";

const Button = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${(props) => props.theme.colors.PRIMARY};
  border-radius: 4px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  gap: 6px;
  height: 40px;
  justify-content: center;
  width: 100%;

  ${(props) =>
    props.variant === "secondary"
      ? {
          backgroundColor: `${props.theme.colors.WHITE}`,
          color: `${props.theme.colors.SECONDARY}`,
          border: `1px solid ${props.theme.colors.SECONDARY}`,
        }
      : props.variant === "rounded"
      ? {
          border: "none",
          borderRadius: "16px",
          color: `${props.theme.colors.WHITE}`,
          fontWeight: "normal",
          height: "fit-content",
          padding: "4px 10px 4px 10px",
          width: "fit-content",
          whiteSpace: "nowrap",
          backgroundColor:
            props.mode === "edit"
              ? `${props.theme.colors.SECONDARY}`
              : `${props.theme.colors.PRIMARY}`,
        }
      : {
          color: `${props.theme.colors.WHITE}`,
          border: "none",
        }}

  &:hover, &:disabled {
    background-color: ${(props) =>
      props.variant === "secondary" ? props.theme.colors.LIGHT : props.theme.colors.PRIMARY_DARK};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    font-size: 14px;
  }

  svg {
    width: 13px;
    height: 13px;
  }
`;

export { Button };
