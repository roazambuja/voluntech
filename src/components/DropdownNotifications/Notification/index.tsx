import { Check, X } from "react-feather";
import { Strong } from "../../../pages/Home/SearchResults/styles";
import { Text } from "../../../styles/global";
import { Picture } from "../../Picture";
import { Buttons, Informations, NotificationItem } from "./styles";
import { answerParticipation, ParticipationInterface } from "../../../services/participation";
import { useState } from "react";

interface NotificationProps {
  notification: ParticipationInterface;
}

function Notification({ notification }: NotificationProps): JSX.Element {
  const [disabled, setDisabled] = useState<boolean>(false);

  async function answerRequest(action: "confirmed" | "rejected") {
    try {
      if (notification._id) {
        await answerParticipation(notification._id, { status: action });
        setDisabled(true);
      }
    } catch (error: any) {
      alert("Ocorreu um erro ao responder a solicitação. Tente novamente.");
    }
  }

  return (
    <NotificationItem disabled={disabled}>
      <Informations>
        <Picture
          variant="mini"
          src={
            notification.user?.profilePicture
              ? `${process.env.REACT_APP_CLOUDINARY_URL}${notification.user.profilePicture.publicId}`
              : undefined
          }
        />
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
          <Check onClick={() => answerRequest("confirmed")} />
        </span>
        <span title="Recusar">
          <X onClick={() => answerRequest("rejected")} />
        </span>
      </Buttons>
    </NotificationItem>
  );
}

export { Notification };
