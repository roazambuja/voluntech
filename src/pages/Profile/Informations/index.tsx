import { Paper, Text, Title } from "../../../styles/global";
import { DescriptionArea, HeaderText, LocationArea, PinIcon, ProfileHeader } from "./styles";
import { Divider } from "../../../components/Divider";
import { OrganizationInterface, UserInterface } from "../../../services/users";
import { Picture } from "../../../components/Picture";
import { AddressInterface } from "../../../services/address";
import { SocialMedia } from "../Organization/SocialMedia";
import { SocialMediaInterface } from "../../../services/socialMedia";
import { PixInterface } from "../../../services/pix";
import { Pix } from "../Organization/Pix";

interface InformationsProps {
  user: UserInterface | OrganizationInterface | null;
  address: AddressInterface | undefined;
  socialMedia: SocialMediaInterface | undefined;
  pix: PixInterface | undefined;
}

function Informations({ address, user, socialMedia, pix }: InformationsProps): JSX.Element {
  return (
    <Paper>
      <ProfileHeader>
        <Picture
          src={
            user?.profilePicture
              ? `${process.env.REACT_APP_CLOUDINARY_URL}${user.profilePicture.publicId}`
              : undefined
          }
          variant="profile"
        />
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
        <SocialMedia socialMedia={socialMedia} />
        <Pix pix={pix} />
      </DescriptionArea>
    </Paper>
  );
}

export { Informations };
