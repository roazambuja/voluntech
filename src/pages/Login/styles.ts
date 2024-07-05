import styled from "styled-components";
import { Paper, Text } from "../../styles/global";

const CustomPaper = styled(Paper)`
  padding: 0;
  gap: 0;
  flex-direction: row;
  width: 800px;
  height: 500px;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.PRIMARY};
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
`;

const Logo = styled.img`
  width: 150px;
`;

const CustomText = styled(Text)`
  align-self: flex-start;
`;

export { CustomPaper, ImageContainer, LoginImage, FormContainer, Logo, CustomText };
