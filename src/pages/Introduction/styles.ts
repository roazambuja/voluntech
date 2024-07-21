import styled from "styled-components";
import { Strong as GlobalStrong } from "../../styles/global";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  text-align: center;
  overflow: auto;

  @media (max-width: ${(props) => props.theme.breakpoints.DESKTOP}) {
    width: 60%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    width: 70%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
    width: 85%;
  }
`;

const Logo = styled.img`
  width: 250px;

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    width: 200px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
    width: 150px;
  }
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.BLACK};
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 50px;

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    font-size: 18px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
    font-size: 14px;
  }
`;

const Strong = styled(GlobalStrong)`
  font-weight: 400;
`;

export { Container, Logo, Text, Strong };
