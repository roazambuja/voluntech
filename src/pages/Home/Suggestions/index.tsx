import { Picture } from "../../../components/Picture";
import { Text } from "../../../styles/global";
import { CustomPaper, TextArea } from "../../Organizations/Configurations/styles";
import { Header, ListItem, Title } from "../SearchResults/styles";
import { getUser, OrganizationInterface, UserInterface } from "../../../services/users";
import { useEffect, useState } from "react";

function Suggestions(): JSX.Element {
  const [user, setUser] = useState<OrganizationInterface>();

  async function getUserInformations() {
    try {
      let response = await getUser(process.env.REACT_APP_USER!);
      const { data } = response.data;
      setUser(data);
    } catch (error: any) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUserInformations();
  }, []);

  return (
    <>
      <CustomPaper>
        <Header>Sugestões</Header>
        <ListItem key={1} as="a" href={`/perfil/${user?._id}`} target="_blank">
          <Picture
            variant="mini"
            src={
              user?.profilePicture
                ? `${process.env.REACT_APP_CLOUDINARY_URL}${user.profilePicture.publicId}`
                : undefined
            }
          />
          <TextArea>
            <Title>{user?.name}</Title>
            <Text>{user && "cause" in user && user.cause}</Text>
          </TextArea>
        </ListItem>
      </CustomPaper>
    </>
  );
}

export default Suggestions;
