import { Check, X } from "react-feather";
import { Strong } from "../../../pages/Home/SearchResults/styles";
import { Text } from "../../../styles/global";
import { Picture } from "../../Picture";
import { Buttons, Informations, NotificationItem } from "./styles";
import { ParticipationInterface } from "../../../services/participation";

interface NotificationProps {
  notification: ParticipationInterface;
}

function Notification({ notification }: NotificationProps): JSX.Element {
  return (
    <NotificationItem>
      <Informations>
        <Picture variant="mini" />
        <Text>
          <Strong>{notification.user?.name}</Strong> deseja participar do voluntariado{" "}
          <Strong>
            {typeof notification.volunteering !== "string" && notification.volunteering.category}
          </Strong>
          .
        </Text>
      </Informations>
      <Buttons>
        <span title="Aprovar">
          <Check />
        </span>
        <span title="Recusar">
          <X />
        </span>
      </Buttons>
    </NotificationItem>
  );
}

export { Notification };
