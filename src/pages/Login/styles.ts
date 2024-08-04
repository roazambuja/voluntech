import styled from "styled-components";
import { Paper, Text } from "../../styles/global";

const CustomPaper = styled(Paper)`
  padding: 0;
  gap: 0;
  flex-direction: row;

  @media (min-width: ${(props) => props.theme.breakpoints.DESKTOP}) {
    width: 800px;
    height: 500px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.PRIMARY};

  @media (max-width: ${(props) => props.theme.breakpoints.DESKTOP}) {
    display: none;
  }
`;

const LoginImage = styled.img`
  width: 100%;
  opacity: 0.5;
  object-fit: cover;
`;

const FormContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 50%;
  gap: 16px;
  flex-direction: column;
  padding: 32px;
  box-sizing: border-box;

  @media (max-width: ${(props) => props.theme.breakpoints.DESKTOP}) {
    width: 100%;
  }
`;

const Logo = styled.img`
  width: 150px;
`;

const CustomText = styled(Text)`
  align-self: flex-start;
`;

const BottomArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${(props) => props.theme.breakpoints.DESKTOP}) {
    gap: 8px;
  }
`;

export { CustomPaper, ImageContainer, LoginImage, FormContainer, Logo, CustomText, BottomArea };
