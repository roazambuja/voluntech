import { Check, X } from "react-feather";
import { Strong } from "../../../pages/Home/SearchResults/styles";
import { Text } from "../../../styles/global";
import { Picture } from "../../Picture";
import { Buttons, Informations, NotificationItem } from "./styles";
import { answerParticipation, ParticipationInterface } from "../../../services/participation";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

interface NotificationProps {
  notification: ParticipationInterface;
}

function Notification({ notification }: NotificationProps): JSX.Element {
  const [disabled, setDisabled] = useState<boolean>(false);
  const { user: loggedUser } = useAuth();
  const isOrganization = loggedUser?.role === "Organização";

  async function answerRequest(action: "confirmed" | "rejected") {
    try {
      if (notification._id) {
        if (isOrganization) {
          await answerParticipation(notification._id, { status: action });
        } else {
          await answerParticipation(notification._id);
        }
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
            isOrganization
              ? notification.user?.profilePicture
                ? `${process.env.REACT_APP_CLOUDINARY_URL}${notification.user.profilePicture.publicId}`
                : undefined
              : typeof notification.volunteering !== "string" &&
                notification.volunteering.project.organization.profilePicture
              ? `${process.env.REACT_APP_CLOUDINARY_URL}${notification.volunteering.project.organization.profilePicture.publicId}`
              : undefined
          }
        />
        <Text>
          <Strong
            as={Link}
            to={`/perfil/${
              isOrganization
                ? notification.user?._id
                : typeof notification.volunteering !== "string" &&
                  notification.volunteering.project.organization._id
            }`}
          >
            {isOrganization
              ? notification.user?.name
              : typeof notification.volunteering !== "string" &&
                notification.volunteering.project.organization.name}
          </Strong>{" "}
          {isOrganization
            ? "deseja participar do voluntariado "
            : `${
                notification.status === "confirmed" ? "aprovou" : "rejeitou"
              } sua participação no voluntariado `}
          <Strong
            as={Link}
            to={`/voluntariado/${
              typeof notification.volunteering !== "string" && notification.volunteering._id
            }`}
          >
            {typeof notification.volunteering !== "string" && notification.volunteering.category}
          </Strong>
          .
        </Text>
      </Informations>
      <Buttons>
        <span title={isOrganization ? "Aprovar" : "Visto"}>
          <Check onClick={() => answerRequest("confirmed")} />
        </span>
        {isOrganization && (
          <span title="Recusar">
            <X onClick={() => answerRequest("rejected")} />
          </span>
        )}
      </Buttons>
    </NotificationItem>
  );
}

export { Notification };
