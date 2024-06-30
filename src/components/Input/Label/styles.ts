import styled from "styled-components";
import { LabelProps } from ".";

const Label = styled.label<LabelProps>`
  color: ${(props) => props.theme.colors.GREY};
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;

  ${(props) =>
    props.type === "file" && {
      width: "fit-content",
      fontSize: "16px",
      border: `2px solid ${props.theme.colors.PRIMARY_LIGHT}`,
      padding: "8px",
      fontWeight: "bold",
      borderRadius: "8px",
      alignSelf: "center",
      cursor: "pointer",
    }};

  @media (max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
    font-size: 14px;
  }
`;

export { Label };
