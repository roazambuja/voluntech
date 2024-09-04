import { useAuth } from "../../contexts/AuthContext";
import { FeedHeader, ProjectArea, Screen, Text } from "./styles";
import { useEffect, useState } from "react";
import { AddressInterface, getUserAddress } from "../../services/address";
import { Loader } from "../../components/Loader";
import { Informations } from "./Informations";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Screen as GlobalScreen } from "../../styles/global";

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
        <GlobalScreen>
          <Loader />
        </GlobalScreen>
      ) : (
        <Screen>
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
            </ProjectArea>
          )}
        </Screen>
      )}
    </>
  );
}

export default Profile;
