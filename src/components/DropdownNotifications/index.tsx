import { ParticipationInterface } from "../../services/participation";
import { Notification } from "./Notification";
import { Dropdown, NotificationsList } from "./styles";

interface DropdownNotificationProps {
  open: boolean;
  notifications: ParticipationInterface[];
}

function DropdownNotifications({ open, notifications }: DropdownNotificationProps) {
  return (
    <Dropdown open={open}>
      <NotificationsList>
        {notifications.map((item: ParticipationInterface, key) => {
          return <Notification key={key} notification={item} />;
        })}
      </NotificationsList>
    </Dropdown>
  );
}

export default DropdownNotifications;
