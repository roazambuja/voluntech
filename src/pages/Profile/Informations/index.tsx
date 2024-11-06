import { Paper, Text, Title } from "../../../styles/global";
import {
  ButtonsArea,
  DescriptionArea,
  HeaderText,
  LocationArea,
  PinIcon,
  ProfileHeader,
} from "./styles";
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
import { alreadyFollows, followOrganization, stopFollowing } from "../../../services/follow";
import { useEffect, useState } from "react";
import { Loader } from "../../../components/Loader";
import { theme } from "../../../styles/theme";
import { ButtonArea } from "../../SignUp/styles";
import { useNavigate } from "react-router-dom";

interface InformationsProps {
  user: UserInterface | OrganizationInterface | null;
  address: AddressInterface | undefined;
  socialMedia: SocialMediaInterface | undefined;
  pix: PixInterface | undefined;
}

function Informations({ address, user, socialMedia, pix }: InformationsProps): JSX.Element {
  const { user: loggedUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [follows, setFollows] = useState<boolean>(true);

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

  async function getFollow() {
    try {
      if (
        user?._id &&
        loggedUser?.role !== "Visitante" &&
        user._id != loggedUser?._id &&
        user.role === "Organização"
      ) {
        const { data } = await alreadyFollows(user?._id);
        setFollows(data.follows);
      }
    } catch (error: any) {
      setFollows(false);
    } finally {
      setLoading(false);
    }
  }

  async function unfollow() {
    setLoading(true);
    try {
      if (user?._id) {
        await stopFollowing(user?._id);
        setFollows(false);
      }
    } catch (error: any) {
      alert("Ocorreu um erro ao parar de seguir a organização. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getFollow();
  });

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
        <ButtonsArea>
          {user?.role === "Organização" &&
            loggedUser?.role === "Voluntário" &&
            user._id !== loggedUser?._id && (
              <Button
                onClick={follows ? unfollow : follow}
                variant={follows ? "secondary" : "primary"}
              >
                {loading ? (
                  <Loader color={follows ? theme.colors.SECONDARY : theme.colors.LIGHT} />
                ) : follows ? (
                  "Parar de acompanhar"
                ) : (
                  "Acompanhar"
                )}
              </Button>
            )}
          {loggedUser?.role === "Visitante" && user?.role === "Organização" && (
            <Button
              onClick={() => alert("Você precisa estar logado para acompanhar uma organização!")}
            >
              Acompanhar
            </Button>
          )}
          {loggedUser?.role !== "Visitante" && loggedUser?._id != user?._id && (
            <>
              <Button onClick={() => navigate(`/chat/${user?._id}`)}>Enviar mensagem</Button>
            </>
          )}
        </ButtonsArea>
      </DescriptionArea>
    </Paper>
  );
}

export { Informations };
