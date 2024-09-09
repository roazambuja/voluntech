import { useAuth } from "../../contexts/AuthContext";
import { FeedHeader, ProjectArea, Text } from "./styles";
import { useEffect, useState } from "react";
import { AddressInterface, getUserAddress } from "../../services/address";
import { Loader } from "../../components/Loader";
import { Informations } from "./Informations";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Screen } from "../../pages/MainLayout/styles";
import { ProjectList } from "./ProjectList";

function Profile(): JSX.Element {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [address, setAddress] = useState<AddressInterface>();
  const [loading, setLoading] = useState<boolean>(false);

  async function getAddress() {
    try {
      setLoading(true);
      if (user?._id) {
        let response = await getUserAddress(user?._id);
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
    getAddress();
  }, []);

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
