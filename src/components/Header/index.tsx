import { useState } from "react";
import LogoSvg from "../../assets/light-logo.svg";
import { HeaderContainer, HeaderLogo, MenuIcon } from "./styles";
import DropdownMenu from "../DropdownMenu";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Header(): JSX.Element {
  const { user } = useAuth();
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  return (
    <HeaderContainer>
      <Link to={`/perfil/${user?._id}`}>
        <HeaderLogo src={LogoSvg} alt="Logo da aplicação Voluntech" />
      </Link>
      <MenuIcon onClick={() => setOpenDropdown(!openDropdown)} />
      <DropdownMenu open={openDropdown} />
    </HeaderContainer>
  );
}

export { Header };
