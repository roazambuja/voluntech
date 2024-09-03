import { useAuth } from "../../contexts/AuthContext";
import { FeedHeader, Screen, Text } from "./styles";
import { useEffect, useState } from "react";
import { AddressInterface, getUserAddress } from "../../services/address";
import { Loader } from "../../components/Loader";
import { Informations } from "./Informations";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";

function Profile(): JSX.Element {
  const { user } = useAuth();
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
    <Screen>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Informations user={user} address={address} />
          <section>
            <FeedHeader>
              <Text>Seus projetos</Text>
              <Divider />
              <Button variant="rounded">Criar projeto</Button>
            </FeedHeader>
          </section>
        </>
      )}
    </Screen>
  );
}

export default Profile;
