import styled from "styled-components";
import { Paper } from "../../styles/global";
import { CheckCircle, Upload, User } from "react-feather";

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
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const ButtonArea = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
`;

const CheckIcon = styled(CheckCircle)`
  color: ${(props) => props.theme.colors.SECONDARY};
  height: 50px;
  margin: 16px;
  width: 50px;
`;

const ProfilePicture = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.theme.colors.PRIMARY_LIGHT};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserIcon = styled(User)`
  color: ${(props) => props.theme.colors.WHITE};
  width: 50px;
  height: 50px;
`;

const UploadIcon = styled(Upload)`
  width: 16px;
  height: 16px;
  stroke-width: 3px;
`;

export {
  Container,
  CustomPaper,
  TitleArea,
  Form,
  ButtonArea,
  CheckIcon,
  ProfilePicture,
  UserIcon,
  UploadIcon,
};
