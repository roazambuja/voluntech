import { LogOut, Settings, User } from "react-feather";
import { DropdownItem } from "./DropdownItem";
import { ItemList, DropdownMenu as StyledDropdownMenu } from "./styles";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface DropdownMenuProps {
  open: boolean;
}

function DropdownMenu({ open }: DropdownMenuProps) {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  return (
    <StyledDropdownMenu open={open}>
      <ItemList>
        <DropdownItem Image={User} text={"Meu Perfil"} action={() => navigate("/perfil")} />
        {user?.role === "Organização" && (
          <DropdownItem
            Image={Settings}
            text={"Configurações"}
            action={() => navigate("/configuracoes")}
          />
        )}

        <DropdownItem Image={LogOut} text={"Sair"} action={logout} />
      </ItemList>
    </StyledDropdownMenu>
  );
}

export default DropdownMenu;
