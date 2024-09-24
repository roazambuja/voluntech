import { FeedHeader, ProjectArea, Text } from "./styles";
import { useEffect, useState } from "react";
import { AddressInterface, getUserAddress } from "../../services/address";
import { Loader } from "../../components/Loader";
import { Informations } from "./Informations";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { Screen } from "../../pages/MainLayout/styles";
import { ProjectList } from "./Organization/ProjectList";
import { getUser, OrganizationInterface, UserInterface } from "../../services/users";
import { useAuth } from "../../contexts/AuthContext";
import { getSocialMediaByUser, SocialMediaInterface } from "../../services/socialMedia";
import { getPixByUser, PixInterface } from "../../services/pix";
import { Plus } from "react-feather";

function Profile(): JSX.Element {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user: loggedUser } = useAuth();

  const [address, setAddress] = useState<AddressInterface>();
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserInterface | OrganizationInterface | null>(null);
  const [socialMedia, setSocialMedia] = useState<SocialMediaInterface>();
  const [pix, setPix] = useState<PixInterface>();

  async function getUserInformations() {
    try {
      setLoading(true);
      if (id) {
        let response = await getUser(id);
        const { data } = response.data;
        setUser(data);
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getAddress() {
    try {
      setLoading(true);
      if (id) {
        let response = await getUserAddress(id);
        const { address } = response.data;
        setAddress(address);
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getSocialMedia() {
    try {
      setLoading(true);
      if (id) {
        let response = await getSocialMediaByUser(id);
        const { socialMedia } = response.data;
        setSocialMedia(socialMedia);
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getPix() {
    try {
      setLoading(true);
      if (id) {
        let response = await getPixByUser(id);
        const { pix } = response.data;
        setPix(pix);
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUserInformations();
    getAddress();
    getSocialMedia();
    getPix();
  }, [id]);

  return (
    <>
      {loading ? (
        <Screen>
          <Loader />
        </Screen>
      ) : (
        <>
          <Informations user={user} address={address} socialMedia={socialMedia} pix={pix} />
          {user?.role === "Organização" && (
            <ProjectArea>
              <FeedHeader>
                <Text>{loggedUser?._id === user._id ? "Seus projetos" : "Projetos"}</Text>
                <Divider />
                {loggedUser?._id === user._id && (
                  <Button
                    variant="rounded"
                    icon={Plus}
                    onClick={() => navigate("/cadastrarProjeto")}
                  >
                    Criar projeto
                  </Button>
                )}
              </FeedHeader>
              <ProjectList id={user._id!} />
            </ProjectArea>
          )}
        </>
      )}
    </>
  );
}

export default Profile;
