import { useState } from "react";
import LogoSvg from "../../assets/light-logo.svg";
import { HeaderContainer, HeaderLogo, MenuIcon } from "./styles";
import DropdownMenu from "../DropdownMenu";
import { Link } from "react-router-dom";

function Header(): JSX.Element {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  return (
    <HeaderContainer>
      <Link to="/home">
        <HeaderLogo src={LogoSvg} alt="Logo da aplicação Voluntech" />
      </Link>
      <MenuIcon onClick={() => setOpenDropdown(!openDropdown)} />
      <DropdownMenu open={openDropdown} />
    </HeaderContainer>
  );
}

export { Header };
