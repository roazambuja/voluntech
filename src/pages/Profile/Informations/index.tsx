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
import { Button } from "../../../components/Button";
import { useAuth } from "../../../contexts/AuthContext";
import { followOrganization } from "../../../services/follow";
import { useState } from "react";
import { Loader } from "../../../components/Loader";
import { theme } from "../../../styles/theme";
import { Check } from "react-feather";

interface InformationsProps {
  user: UserInterface | OrganizationInterface | null;
  address: AddressInterface | undefined;
  socialMedia: SocialMediaInterface | undefined;
  pix: PixInterface | undefined;
}

function Informations({ address, user, socialMedia, pix }: InformationsProps): JSX.Element {
  const { user: loggedUser } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [follows, setFollows] = useState<boolean>(false);

  async function follow() {
    try {
      setLoading(true);
      const payload = {
        user: loggedUser as UserInterface,
        organization: user as OrganizationInterface,
      };
      await followOrganization(payload);
      setFollows(true);
    } catch (error: any) {
      alert("Ocorreu um erro ao acompanhar a organização! Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

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
        {user?.role === "Organização" &&
          user._id !== loggedUser?._id &&
          loggedUser?.role === "Voluntário" && (
            <>
              <Divider />
              <Button onClick={follow} disabled={follows}>
                {loading ? (
                  <Loader color={theme.colors.LIGHT} />
                ) : follows ? (
                  <Check />
                ) : (
                  "Acompanhar"
                )}
              </Button>
            </>
          )}
      </DescriptionArea>
    </Paper>
  );
}

export { Informations };
