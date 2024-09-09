import { Menu } from "react-feather";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 112px;
  background-color: ${(props) => props.theme.colors.PRIMARY};
`;

const HeaderLogo = styled.img`
  height: 30px;
`;

const MenuIcon = styled(Menu)`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.colors.LIGHT};
`;

export { HeaderContainer, HeaderLogo, MenuIcon };
