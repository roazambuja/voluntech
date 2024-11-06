import { ParticipationInterface } from "../../services/participation";
import { Text } from "../../styles/global";
import { Notification } from "./Notification";
import { Dropdown, NotificationsList } from "./styles";

interface DropdownNotificationProps {
  open: boolean;
  notifications: ParticipationInterface[];
}

function DropdownNotifications({ open, notifications }: DropdownNotificationProps) {
  return (
    <Dropdown open={open}>
      <NotificationsList empty={notifications.length === 0}>
        {notifications.length === 0 ? (
          <Text>Você não possui nenhuma notificação no momento.</Text>
        ) : (
          notifications.map((item: ParticipationInterface, key) => {
            return <Notification key={key} notification={item} />;
          })
        )}
      </NotificationsList>
    </Dropdown>
  );
}

export default DropdownNotifications;
