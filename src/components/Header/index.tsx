import LogoSvg from "../../assets/light-logo.svg";
import { HeaderContainer, HeaderLogo, MenuIcon } from "./styles";

function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <HeaderLogo src={LogoSvg} alt="Logo da aplicação Voluntech" />
      <MenuIcon />
    </HeaderContainer>
  );
}

export { Header };
