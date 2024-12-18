import { useEffect, useState } from "react";
import LogoSvg from "../../assets/light-logo.svg";
import { ButtonsArea, HeaderContainer, HeaderLogo, Icon, MenuIcon } from "./styles";
import DropdownMenu from "../DropdownMenu";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";
import { ReactComponent as Notification } from "../../assets/icons/notification.svg";
import DropdownNotifications from "../DropdownNotifications";
import { getNotifications, ParticipationInterface } from "../../services/participation";
import { useAuth } from "../../contexts/AuthContext";
import { ReactComponent as PendingMessage } from "../../assets/icons/pending-message.svg";
import { ReactComponent as Message } from "../../assets/icons/message.svg";
import { getUnreadMessages } from "../../services/message";

function Header(): JSX.Element {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [openNotifications, setOpenNotifications] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<ParticipationInterface[]>([]);
  const [hasUnreadMessages, setUnreadMessages] = useState<boolean>();

  async function getPendingNotifications() {
    try {
      const response = await getNotifications();
      const { data } = response;
      setNotifications(data.participations);
    } catch (error: any) {
      console.log("Não foi possível buscar as notificações.");
    }
  }

  async function getUnread() {
    try {
      const response = await getUnreadMessages();
      const { data } = response;
      setUnreadMessages(data.hasUnreadMessages);
    } catch (error: any) {
      console.log("Não foi possível buscar as mensagens não lidas.");
    }
  }

  useEffect(() => {
    getPendingNotifications();
    getUnread();
  }, [openNotifications, openDropdown]);

  return (
    <HeaderContainer>
      <Link to="/home">
        <HeaderLogo src={LogoSvg} alt="Logo da aplicação Voluntech" />
      </Link>
      <ButtonsArea>
        {user?.role != "Visitante" && (
          <>
            <Icon
              as={hasUnreadMessages ? PendingMessage : Message}
              onClick={() => navigate("/chat")}
            />
            <Icon
              as={notifications.length > 0 ? Notification : Bell}
              onClick={() => setOpenNotifications(!openNotifications)}
            />
          </>
        )}
        <MenuIcon onClick={() => setOpenDropdown(!openDropdown)} />
      </ButtonsArea>
      <DropdownMenu open={openDropdown} />
      <DropdownNotifications open={openNotifications} notifications={notifications} />
    </HeaderContainer>
  );
}

export { Header };
