import { Paper, Text, Title } from "../../../styles/global";
import { DescriptionArea, HeaderText, LocationArea, PinIcon, ProfileHeader } from "./styles";
import { Divider } from "../../../components/Divider";
import { OrganizationInterface, UserInterface } from "../../../services/users";
import { ProfilePicture } from "../../../components/ProfilePicture";
import { AddressInterface } from "../../../services/address";

interface InformationsProps {
  user: UserInterface | OrganizationInterface | null;
  address: AddressInterface | undefined;
}

function Informations({ address, user }: InformationsProps): JSX.Element {
  return (
    <Paper>
      <ProfileHeader>
        {user?.profilePicture ? (
          <ProfilePicture
            src={`${process.env.REACT_APP_CLOUDINARY_URL}${user.profilePicture.publicId}`}
          />
        ) : (
          <ProfilePicture />
        )}
        <HeaderText>
          <Title>{user?.name}</Title>
          <Text>
            {user?.role} {user && "cause" in user && `| ${user.cause}`}
          </Text>
        </HeaderText>
      </ProfileHeader>
      <DescriptionArea>
        <Divider />
        {user && "description" in user && <Text>{user.description}</Text>}
        <LocationArea>
          <PinIcon />
          <Text>
            {address?.city}, {address?.state}
          </Text>
        </LocationArea>
      </DescriptionArea>
    </Paper>
  );
}

export { Informations };
