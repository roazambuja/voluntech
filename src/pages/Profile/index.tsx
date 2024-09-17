import { FeedHeader, ProjectArea, Text } from "./styles";
import { useEffect, useState } from "react";
import { AddressInterface, getUserAddress } from "../../services/address";
import { Loader } from "../../components/Loader";
import { Informations } from "./Informations";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { Screen } from "../../pages/MainLayout/styles";
import { ProjectList } from "./ProjectList";
import { getUser, OrganizationInterface, UserInterface } from "../../services/users";

function Profile(): JSX.Element {
  const navigate = useNavigate();
  const { id } = useParams();

  const [address, setAddress] = useState<AddressInterface>();
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserInterface | OrganizationInterface | null>(null);

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

  useEffect(() => {
    getUserInformations();
    getAddress();
  }, [id]);

  return (
    <>
      {loading ? (
        <Screen>
          <Loader />
        </Screen>
      ) : (
        <>
          <Informations user={user} address={address} />
          {user?.role === "Organização" && (
            <ProjectArea>
              <FeedHeader>
                <Text>Seus projetos</Text>
                <Divider />
                <Button variant="rounded" onClick={() => navigate("/cadastrarProjeto")}>
                  Criar projeto
                </Button>
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
