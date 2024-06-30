import { Upload, User } from "react-feather";
import styled from "styled-components";

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

export { ProfilePicture, UserIcon, UploadIcon };
