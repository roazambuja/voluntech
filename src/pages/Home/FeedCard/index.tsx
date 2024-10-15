import { Text } from "../../../styles/global";
import { TextArea } from "../../Organizations/Configurations/styles";
import { Strong, Title } from "../SearchResults/styles";
import { Picture } from "../../../components/Picture";
import { DescriptionArea, Paper, PostText, UpdateHeader, VolunteeringHeader } from "./styles";
import { UpdatesInterface } from "../../../services/updates";
import { Icon } from "../../VolunteeringDetails/styles";
import { MoreHorizontal } from "react-feather";
import { theme } from "../../../styles/theme";
import volunteeringList, {
  VolunteeringProps,
} from "../../../components/VolunteeringCard/volunteering";
import { useEffect, useState } from "react";
import Carousel from "../../../components/Carousel";

export interface FeedCardProps {
  data: UpdatesInterface;
}

function FeedCard({ data }: FeedCardProps): JSX.Element {
  const isProject = data.type === "project";
  const isVolunteering = data.type === "volunteering";
  const [category, setCategory] = useState<VolunteeringProps | undefined>();

  useEffect(() => {
    {
      isVolunteering &&
        setCategory(
          volunteeringList.find((item: VolunteeringProps) => item.category === data.category)
        );
    }
  });

  return (
    <>
      <Paper>
        {isVolunteering && (
          <VolunteeringHeader color={category?.color || theme.colors.PRIMARY_DARK}>
            <Icon as={category?.icon || MoreHorizontal} />
          </VolunteeringHeader>
        )}
        <UpdateHeader
          as="a"
          href={
            isProject
              ? `/projeto/${data._id}`
              : isVolunteering
              ? `/voluntariado/${data._id}`
              : `/projeto/${data.project._id}`
          }
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
            <Text>
              {isProject || isVolunteering ? (
                "Cadastrou um novo " + (isProject ? "projeto" : "voluntariado")
              ) : (
                <>
                  Fez uma postagem no projeto <Strong>{data.project.title}</Strong>
                </>
              )}
            </Text>
          </TextArea>
        </UpdateHeader>
        <DescriptionArea>
          <Title>{isProject ? data.title : isVolunteering && data.category}</Title>
          {isProject || isVolunteering ? (
            <Text>{data.description}</Text>
          ) : (
            <PostText> {data.text}</PostText>
          )}

          {data.type === "post" && data.pictures && data.pictures.length > 0 && (
            <Carousel pictures={data.pictures} />
          )}
        </DescriptionArea>
      </Paper>
    </>
  );
}

export default FeedCard;
