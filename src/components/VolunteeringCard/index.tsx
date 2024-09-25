import { LiaBroomSolid } from "react-icons/lia";
import {
  FaCarSide,
  FaTruck,
  FaPaw,
  FaDonate,
  FaUtensils,
  FaBoxOpen,
  FaHome,
  FaStethoscope,
  FaHammer,
  FaComments,
  FaHandHoldingHeart,
  FaTheaterMasks,
} from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { MoreHorizontal, Heart, BookOpen } from "react-feather";
import { Card, Icon } from "./styles";
import { theme } from "../../styles/theme";

interface VolunteeringCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

function VolunteeringCard({ title, ...props }: VolunteeringCardProps): JSX.Element {
  return (
    <Card
      {...props}
      color={
        title === "Lar Temporário" || title === "Veterinário"
          ? `${theme.colors.SECONDARY}`
          : title === "Logística" ||
            title === "Transporte" ||
            title === "Distribuição de materiais" ||
            title === "Triagem de doações"
          ? `${theme.colors.PRIMARY}`
          : title === "Doação Financeira"
          ? "#0DD746"
          : title === "Limpeza" || title === "Cozinha" || title === "Trabalho manual"
          ? "#FF4500"
          : title === "Apoio psicológico" || title === "Cuidados médicos" || title === "Cuidados"
          ? "#a321ff"
          : title === "Aulas" || title === "Comunicação"
          ? "#0fafac"
          : title === "Entretenimento"
          ? "#fc1fba"
          : `${theme.colors.PRIMARY_DARK}`
      }
    >
      <Icon
        as={
          title === "Veterinário"
            ? FaPaw
            : title === "Lar Temporário"
            ? FaHome
            : title === "Limpeza"
            ? LiaBroomSolid
            : title === "Doação Financeira"
            ? FaDonate
            : title === "Transporte"
            ? FaCarSide
            : title === "Cuidados"
            ? Heart
            : title === "Logística"
            ? FaTruck
            : title === "Cozinha"
            ? FaUtensils
            : title === "Distribuição de materiais"
            ? FaBoxOpen
            : title === "Aulas"
            ? BookOpen
            : title === "Triagem de doações"
            ? FaHandHoldingHeart
            : title === "Apoio psicológico"
            ? IoChatbubbleEllipsesSharp
            : title === "Cuidados médicos"
            ? FaStethoscope
            : title === "Trabalho manual"
            ? FaHammer
            : title === "Comunicação"
            ? FaComments
            : title === "Entretenimento"
            ? FaTheaterMasks
            : MoreHorizontal
        }
      />
      {title}
    </Card>
  );
}

export { VolunteeringCard };
