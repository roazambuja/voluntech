import styled from "styled-components";
import { Paper, Title } from "../../../styles/global";

const CustomPaper = styled(Paper)`
  padding: 0;
  gap: 0;

  :last-child {
    border-bottom: none;
  }
`;

const ConfigSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors.LIGHT};
`;

const CustomTitle = styled(Title)`
  @media (max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
    font-size: 22px;
  }
`;
const TextArea = styled.div``;

export { CustomPaper, ConfigSection, TextArea, CustomTitle };
