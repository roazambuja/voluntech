import { MoreHorizontal } from "react-feather";
import { Picture } from "../../../components/Picture";
import { Text } from "../../../styles/global";
import { CustomPaper, TextArea } from "../../Organizations/Configurations/styles";
import { Header, Icon, Strong, ListItem, Title } from "./styles";
import { SearchInterface } from "../../../services/search";
import volunteeringList, {
  VolunteeringProps,
} from "../../../components/VolunteeringCard/volunteering";

export interface SearchResultsProps {
  data: SearchInterface | undefined;
}

function SearchResults({ data }: SearchResultsProps): JSX.Element {
  return (
    <>
      {data?.projects.length! > 0 && (
        <CustomPaper>
          <Header>Projetos</Header>
          {data?.projects.map((project, key) => {
            return (
              <ListItem as="a" key={key} href={`/projeto/${project._id}`} target="_blank">
                <TextArea>
                  <Title>{project.title}</Title>
                  <Text>
                    Projeto por <Strong>{project.organization.name}</Strong>
                  </Text>
                </TextArea>
              </ListItem>
            );
          })}
        </CustomPaper>
      )}
      {data?.volunteerings.length! > 0 && (
        <CustomPaper>
          <Header>Voluntariados</Header>
          {data?.volunteerings.map((volunteering, key) => {
            const category: VolunteeringProps | undefined = volunteeringList.find(
              (item) => item.category === volunteering.category
            );
            return (
              <ListItem key={key} as="a" href={`/voluntariado/${volunteering._id}`} target="_blank">
                <Icon as={category?.icon || MoreHorizontal} color={category?.color} />
                <TextArea>
                  <Title>{volunteering.category}</Title>
                  <Text>
                    No projeto <Strong>{volunteering.project.title}</Strong>
                  </Text>
                </TextArea>
              </ListItem>
            );
          })}
        </CustomPaper>
      )}
      {data?.users.length! > 0 && (
        <CustomPaper>
          <Header>Usuários</Header>
          {data?.users.map((user, key) => {
            return (
              <ListItem key={key} as="a" href={`/perfil/${user._id}`} target="_blank">
                <Picture
                  variant="mini"
                  src={
                    user?.profilePicture
                      ? `${process.env.REACT_APP_CLOUDINARY_URL}${user.profilePicture.publicId}`
                      : undefined
                  }
                />
                <TextArea>
                  <Title>{user.name}</Title>
                  <Text>
                    {user && "address" in user && `${user.address.city}, ${user.address.state}`} |{" "}
                    {user && "cause" in user ? user.cause : user.role}
                  </Text>
                </TextArea>
              </ListItem>
            );
          })}
        </CustomPaper>
      )}
    </>
  );
}

export default SearchResults;
