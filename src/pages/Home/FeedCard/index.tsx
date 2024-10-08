import { Text } from "../../../styles/global";
import { TextArea } from "../../Organizations/Configurations/styles";
import { Title } from "../SearchResults/styles";
import { Picture } from "../../../components/Picture";
import { DescriptionArea, Paper, UpdateHeader, VolunteeringHeader } from "./styles";
import { UpdatesInterface } from "../../../services/updates";
import { Icon } from "../../VolunteeringDetails/styles";
import { MoreHorizontal } from "react-feather";
import { theme } from "../../../styles/theme";
import volunteeringList, {
  VolunteeringProps,
} from "../../../components/VolunteeringCard/volunteering";
import { useEffect, useState } from "react";

export interface FeedCardProps {
  data: UpdatesInterface;
}

function FeedCard({ data }: FeedCardProps): JSX.Element {
  const isProject = data.type === "project";
  const [category, setCategory] = useState<VolunteeringProps | undefined>();

  useEffect(() => {
    {
      data.type === "volunteering" &&
        setCategory(
          volunteeringList.find((item: VolunteeringProps) => item.category === data.category)
        );
    }
  });

  return (
    <>
      <Paper>
        {!isProject && (
          <VolunteeringHeader color={category?.color || theme.colors.PRIMARY_DARK}>
            <Icon as={category?.icon || MoreHorizontal} />
          </VolunteeringHeader>
        )}
        <UpdateHeader
          as="a"
          href={isProject ? `/projeto/${data._id}` : `/voluntariado/${data._id}`}
        >
          <Picture
            variant="mini"
            src={
              isProject
                ? data.organization?.profilePicture
                  ? `${process.env.REACT_APP_CLOUDINARY_URL}${data.organization.profilePicture.publicId}`
                  : undefined
                : data.project.organization.profilePicture
                ? `${process.env.REACT_APP_CLOUDINARY_URL}${data.project.organization.profilePicture.publicId}`
                : undefined
            }
          />
          <TextArea>
            <Title>{isProject ? data.organization.name : data.project.organization.name}</Title>
            <Text>Cadastrou um novo {isProject ? "projeto" : "voluntariado"}</Text>
          </TextArea>
        </UpdateHeader>
        <DescriptionArea>
          <Title>{isProject ? data.title : data.category}</Title>
          <Text>{data.description}</Text>
        </DescriptionArea>
      </Paper>
    </>
  );
}

export default FeedCard;
