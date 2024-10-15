import { Text } from "../../styles/global";
import { Strong, Title } from "../../pages/Home/SearchResults/styles";
import { Picture } from "../Picture";
import { DescriptionArea, Paper, PostText, UpdateHeader, VolunteeringHeader } from "./styles";
import { UpdatesInterface } from "../../services/updates";
import { Icon } from "../../pages/VolunteeringDetails/styles";
import { MoreHorizontal } from "react-feather";
import { theme } from "../../styles/theme";
import { useEffect, useState } from "react";
import { Carousel } from "../Carousel";
import { TextArea } from "../../pages/Organizations/Configurations/styles";
import volunteeringList, { VolunteeringProps } from "../VolunteeringCard/volunteering";

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
                : isVolunteering
                ? data.project.organization.profilePicture
                  ? `${process.env.REACT_APP_CLOUDINARY_URL}${data.project.organization.profilePicture.publicId}`
                  : undefined
                : data.user.profilePicture
                ? `${process.env.REACT_APP_CLOUDINARY_URL}${data.user.profilePicture.publicId}`
                : undefined
            }
          />
          <TextArea>
            <Title>
              {isProject
                ? data.organization.name
                : isVolunteering
                ? data.project.organization.name
                : data.user.name}
            </Title>
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
