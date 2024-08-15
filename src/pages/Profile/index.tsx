import { useAuth } from "../../contexts/AuthContext";
import { Paper, Text, Title } from "../../styles/global";
import { ProfilePicture } from "../../components/ProfilePicture";

import { DescriptionArea, HeaderText, LocationArea, PinIcon, ProfileHeader } from "./styles";
import { Divider } from "../../components/Divider";
import { useEffect, useState } from "react";
import { AddressInterface, getUserAddress } from "../../services/address";
import { Loader } from "../../components/Loader";

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
    <Paper>
      {loading ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </Paper>
  );
}

export default Profile;
