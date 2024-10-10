import { useEffect, useState } from "react";
import LogoSvg from "../../assets/light-logo.svg";
import { ButtonsArea, HeaderContainer, HeaderLogo, MenuIcon, NotificationIcon } from "./styles";
import DropdownMenu from "../DropdownMenu";
import { Link } from "react-router-dom";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";
import { ReactComponent as Notification } from "../../assets/icons/notification.svg";
import DropdownNotifications from "../DropdownNotifications";
import { getNotifications, ParticipationInterface } from "../../services/participation";

function Header(): JSX.Element {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [openNotifications, setOpenNotifications] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<ParticipationInterface[]>([]);

  async function getPendingNotifications() {
    try {
      const response = await getNotifications();
      const { data } = response;
      setNotifications(data.participations);
      console.log(notifications);
    } catch (error: any) {
      console.log("Não foi possível buscar as notificações.");
    }
  }
  useEffect(() => {
    getPendingNotifications();
  }, []);

  return (
    <HeaderContainer>
      <Link to="/home">
        <HeaderLogo src={LogoSvg} alt="Logo da aplicação Voluntech" />
      </Link>
      <ButtonsArea>
        <NotificationIcon
          as={notifications.length > 0 ? Notification : Bell}
          onClick={() => setOpenNotifications(!openNotifications)}
        />
        <MenuIcon onClick={() => setOpenDropdown(!openDropdown)} />
      </ButtonsArea>
      <DropdownMenu open={openDropdown} />
      <DropdownNotifications open={openNotifications} notifications={notifications} />
    </HeaderContainer>
  );
}

export { Header };
