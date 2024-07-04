import styled from "styled-components";
import { LabelProps } from ".";
import { Label as GlobalLabel } from "../../../styles/global";

const Label = styled(GlobalLabel)<LabelProps>`
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
