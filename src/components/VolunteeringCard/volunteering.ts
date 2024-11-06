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
import { theme } from "../../styles/theme";

export interface VolunteeringProps {
  category: string;
  icon: React.ElementType;
  color: string;
}

const volunteering: VolunteeringProps[] = [
  {
    category: "Lar Temporário",
    icon: FaHome,
    color: theme.colors.SECONDARY,
  },
  {
    category: "Veterinário",
    icon: FaPaw,
    color: theme.colors.SECONDARY,
  },
  {
    category: "Logística",
    icon: FaTruck,
    color: theme.colors.PRIMARY,
  },
  {
    category: "Transporte",
    icon: FaCarSide,
    color: theme.colors.PRIMARY,
  },
  {
    category: "Distribuição de materiais",
    icon: FaBoxOpen,
    color: theme.colors.PRIMARY,
  },
  {
    category: "Triagem de doações",
    icon: FaHandHoldingHeart,
    color: theme.colors.PRIMARY,
  },
  {
    category: "Doação financeira",
    icon: FaDonate,
    color: "#0DD746",
  },
  {
    category: "Limpeza",
    icon: LiaBroomSolid,
    color: "#FF4500",
  },
  {
    category: "Cozinha",
    icon: FaUtensils,
    color: "#FF4500",
  },
  {
    category: "Trabalho manual",
    icon: FaHammer,
    color: "#FF4500",
  },
  {
    category: "Apoio psicológico",
    icon: IoChatbubbleEllipsesSharp,
    color: "#a321ff",
  },
  {
    category: "Cuidados médicos",
    icon: FaStethoscope,
    color: "#a321ff",
  },
  {
    category: "Cuidados",
    icon: Heart,
    color: "#a321ff",
  },
  {
    category: "Aulas",
    icon: BookOpen,
    color: "#0fafac",
  },
  {
    category: "Comunicação",
    icon: FaComments,
    color: "#0fafac",
  },
  {
    category: "Entretenimento",
    icon: FaTheaterMasks,
    color: "#fc1fba",
  },
  {
    category: "Outro",
    icon: MoreHorizontal,
    color: theme.colors.PRIMARY_DARK,
  },
];

export default volunteering;
