import styled from "styled-components";
import { CustomPaper } from "../ProjectDetails/styles";

const Paper = styled(CustomPaper)`
  max-width: 800px;
  display: flex;
  flex-direction: row;
  height: 500px;

  @media (min-width: ${(props) => props.theme.breakpoints.TABLET}) {
    width: 80%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    width: 70%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
    width: 85%;
  }
`;

export { Paper };
