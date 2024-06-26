import styled from "styled-components";
import { Paper } from "../../styles/global";

const Container = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.LIGHT};
  display: flex;
  font-family: "Roboto", sans-serif;
  justify-content: center;
  min-height: 100vh;
`;

const CustomPaper = styled(Paper)`
  width: 500px;

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    width: calc(70% - 64px);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
    width: calc(90% - 64px);
  }
`;

const TitleArea = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export { Container, CustomPaper, TitleArea, Form };
