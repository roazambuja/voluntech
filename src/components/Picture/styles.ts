import { Image, User } from "react-feather";
import styled from "styled-components";
import { PictureProps } from ".";

const Picture = styled.div<PictureProps>`
  align-items: center;
  background-color: ${(props) => props.theme.colors.PRIMARY_LIGHT};
  border: 2px solid ${(props) => props.theme.colors.PRIMARY_LIGHT};
  border-radius: 10px;
  display: flex;
  height: 80px;
  justify-content: center;
  overflow: auto;

  ${(props) =>
    props.variant === "profile"
      ? {
          width: "80px",
        }
      : props.variant === "mini"
      ? {
          width: "50px",
          height: "50px",
        }
      : {
          width: "100%",
        }}

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    height: 70px;

    ${(props) =>
      props.variant === "profile"
        ? {
            width: "70px",
          }
        : props.variant === "mini" && {
            width: "50px",
            height: "50px",
          }}
  }
`;

const UserIcon = styled(User)`
  color: ${(props) => props.theme.colors.WHITE};
  width: 50px;
  height: 50px;
`;

const ImageIcon = styled(Image)`
  color: ${(props) => props.theme.colors.WHITE};
  width: 40px;
  height: 40px;
`;

const SelectedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export { Picture, UserIcon, ImageIcon, SelectedImage };
