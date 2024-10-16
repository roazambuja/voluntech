import { FeedHeader, HeaderLine, ProjectArea, Text } from "./styles";
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
import { UpdatesInterface } from "../../services/updates";
import { getUserPosts } from "../../services/post";
import FeedCard from "../../components/FeedCard";
import { PaginationButtons } from "../../components/PaginationButtons";

function Profile(): JSX.Element {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user: loggedUser } = useAuth();

  const [address, setAddress] = useState<AddressInterface>();
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserInterface | OrganizationInterface | null>(null);
  const [socialMedia, setSocialMedia] = useState<SocialMediaInterface>();
  const [pix, setPix] = useState<PixInterface>();

  const [posts, setPosts] = useState<UpdatesInterface[]>();
  const [postsPage, setPostsPage] = useState<number>(1);
  const [postsTotalPages, setPostsTotalPages] = useState<number>(1);
  const [errorMessage, setErrorMessage] = useState<string>();

  async function getUserInformations() {
    try {
      setLoading(true);
      if (id) {
        let response = await getUser(id);
        const { data } = response.data;
        setUser(data);
      }
      getPosts(id!);
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

  async function getPosts(id: string, page: number = 1) {
    try {
      const response = await getUserPosts(id, page, 4);
      const { data, pagination } = response.data;
      const updatedPosts = data.map((post: any) => ({
        ...post,
        type: "post",
      }));
      setPosts(updatedPosts);
      setPostsTotalPages(pagination.totalPages);
    } catch (error: any) {
      setErrorMessage("Não foi possívei buscar as postagens.");
    }
  }

  const handleUpdatesPageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= postsTotalPages) {
      setPostsPage(newPage);
      getPosts(id!, newPage);
    }
  };

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
          <ProjectArea>
            {user?.role === "Organização" ? (
              <>
                <FeedHeader>
                  <HeaderLine>
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
                  </HeaderLine>
                </FeedHeader>
                <ProjectList id={user._id!} />
              </>
            ) : errorMessage ? (
              <Text>{errorMessage}</Text>
            ) : (
              posts?.map((post) => {
                return <FeedCard data={post} />;
              })
            )}
            {posts?.length! > 0 && (
              <PaginationButtons
                current={postsPage}
                total={postsTotalPages}
                forwardFunction={() => handleUpdatesPageChange(postsPage + 1)}
                backFunction={() => handleUpdatesPageChange(postsPage - 1)}
              />
            )}
          </ProjectArea>
        </>
      )}
    </>
  );
}

export default Profile;
