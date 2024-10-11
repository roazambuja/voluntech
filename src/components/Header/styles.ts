import { Menu } from "react-feather";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 112px;
  background-color: ${(props) => props.theme.colors.PRIMARY};

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    padding: 12px 56px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
    padding: 12px 32px;
  }
`;

const HeaderLogo = styled.img`
  height: 30px;
`;

const MenuIcon = styled(Menu)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.colors.LIGHT};
`;

const NotificationIcon = styled.svg`
  width: 25px;
  height: 25px;
`;

const ButtonsArea = styled.div`
  display: flex;
  gap: 32px;
`;

export { HeaderContainer, HeaderLogo, MenuIcon, ButtonsArea, NotificationIcon };
