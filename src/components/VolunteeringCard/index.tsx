import React from "react";
import { Card, Icon } from "./styles";
import volunteering, { VolunteeringProps } from "./volunteering";
import { MoreHorizontal } from "react-feather";
import { theme } from "../../styles/theme";

interface VolunteeringCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

function VolunteeringCard({ title, ...props }: VolunteeringCardProps): JSX.Element {
  const category: VolunteeringProps | undefined = volunteering.find(
    (item) => item.category === title
  );

  return (
    <Card {...props} color={category?.color || theme.colors.PRIMARY_DARK}>
      <Icon as={category?.icon || MoreHorizontal} />
      {title}
    </Card>
  );
}

export { VolunteeringCard };
