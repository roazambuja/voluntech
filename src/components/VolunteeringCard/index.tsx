import React from "react";
import { Card, Icon } from "./styles";
import volunteering, { VolunteeringProps } from "./volunteering";
import { MoreHorizontal } from "react-feather";
import { theme } from "../../styles/theme";
import { useNavigate } from "react-router-dom";
import { VolunteeringInterface } from "../../services/volunteering";

interface VolunteeringCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  volunteeringData: VolunteeringInterface;
}

function VolunteeringCard({ volunteeringData, ...props }: VolunteeringCardProps): JSX.Element {
  const navigate = useNavigate();

  const category: VolunteeringProps | undefined = volunteering.find(
    (item) => item.category === volunteeringData.category
  );

  return (
    <Card
      {...props}
      color={category?.color || theme.colors.PRIMARY_DARK}
      onClick={() => navigate(`/voluntariado/${volunteeringData._id}`)}
    >
      <Icon as={category?.icon || MoreHorizontal} />
      {volunteeringData.category}
    </Card>
  );
}

export { VolunteeringCard };
