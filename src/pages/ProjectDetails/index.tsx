import { useNavigate, useParams } from "react-router-dom";
import { Link, Paper, Text, Title } from "../../styles/global";
import { useEffect, useState } from "react";
import { getProjectById, ProjectInterface } from "../../services/project";
import { Loader } from "../../components/Loader";
import { Message } from "../../components/Message";
import { Divider } from "../../components/Divider";
import {
  CustomPaper,
  DefaultHeader,
  HeaderImage,
  InformationsArea,
  TitleArea,
  VolunteeringList,
} from "./styles";
import { Screen } from "../MainLayout/styles";
import { FeedHeader, HeaderLine, ProjectArea } from "../Profile/styles";
import { Button } from "../../components/Button";
import { useAuth } from "../../contexts/AuthContext";
import { Plus } from "react-feather";
import { VolunteeringCard } from "../../components/VolunteeringCard";
import { getProjectVolunteering, VolunteeringInterface } from "../../services/volunteering";
import { projectParticipation } from "../../services/participation";
import { getProjectUpdates, UpdatesInterface } from "../../services/updates";
import FeedCard from "../../components/FeedCard";
import { PaginationButtons } from "../../components/PaginationButtons";
import { Text as ProfileText } from "../Profile/styles";

function ProjectDetails(): JSX.Element {
  const { id } = useParams();
  const { user: loggedUser } = useAuth();
  const navigate = useNavigate();

  const [project, setProject] = useState<ProjectInterface>();
  const [volunteering, setVolunteering] = useState<VolunteeringInterface[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [canPost, setCanPost] = useState<boolean>();

  const [updates, setUpdates] = useState<UpdatesInterface[]>();
  const [updatesPage, setUpdatesPage] = useState<number>(1);
  const [updatesTotalPages, setUpdatesTotalPages] = useState<number>(1);

  async function getProject() {
    try {
      setLoading(true);
      let response = await getProjectById(id!);
      const { project } = response.data;
      setProject(project);
      getVolunteering(project._id);
      getParticipation(project._id);
      getUpdates(project._id);
    } catch (error: any) {
      setMessage("Não foi possível exibir os dados do projeto. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  async function getParticipation(id: string) {
    try {
      await projectParticipation(id);
      setCanPost(true);
    } catch (error: any) {
      setCanPost(false);
    }
  }

  async function getVolunteering(projectdId: string) {
    try {
      setLoading(true);
      let response = await getProjectVolunteering(projectdId);
      const { volunteering } = response.data;
      setVolunteering(volunteering);
    } catch (error: any) {
      setMessage("Não foi possível exibir os dados do projeto. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  async function getUpdates(id: string, page: number = 1) {
    try {
      const response = await getProjectUpdates(id, page, 30);
      const { data, pagination } = response.data;
      setUpdates(data);
      setUpdatesTotalPages(pagination.totalPages);
    } catch (error: any) {
      setErrorMessage("Não foi possívei buscar as atualizações.");
    }
  }

  const handleUpdatesPageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= updatesTotalPages) {
      setUpdatesPage(newPage);
      getUpdates(id!, newPage);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <>
      {loading ? (
        <Screen>
          <Loader />
        </Screen>
      ) : message ? (
        <Paper>
          <Message message={message} error={true} />
        </Paper>
      ) : (
        <>
          <CustomPaper>
            {project?.headerPicture ? (
              <HeaderImage
                src={`${process.env.REACT_APP_CLOUDINARY_URL}${project.headerPicture.publicId}`}
              />
            ) : (
              <DefaultHeader />
            )}
            <InformationsArea>
              <TitleArea>
                <Title>{project?.title}</Title>
                <Text>
                  Projeto de{" "}
                  <Link to={`/perfil/${project?.organization._id}`}>
                    {project?.organization.name}
                  </Link>
                </Text>
              </TitleArea>
              <Divider />
              <Text>{project?.description}</Text>
              {volunteering && volunteering.length > 0 && (
                <>
                  <Divider text="necessidades" />
                  <VolunteeringList>
                    {volunteering?.map((item, key) => {
                      return <VolunteeringCard key={key} volunteeringData={item} />;
                    })}
                  </VolunteeringList>
                </>
              )}
              {(loggedUser?.role === "Organização" &&
                loggedUser._id === project?.organization._id) ||
                (loggedUser?.role === "Voluntário" && canPost && (
                  <>
                    <Divider />
                    <Button onClick={() => navigate(`/publicacao/${project?._id}`)}>
                      Fazer publicação
                    </Button>
                  </>
                ))}
            </InformationsArea>
          </CustomPaper>
          <ProjectArea>
            <FeedHeader>
              {loggedUser?.role !== "Visitante" &&
                loggedUser?._id === project?.organization._id && (
                  <HeaderLine>
                    <Divider />
                    <Button
                      variant="rounded"
                      icon={Plus}
                      onClick={() => navigate(`/cadastrarVoluntariado/${project?._id}`)}
                    >
                      Registrar trabalho voluntário
                    </Button>
                  </HeaderLine>
                )}
              {updates?.length! > 0 && (
                <HeaderLine>
                  <ProfileText>Atualizações do projeto</ProfileText>
                  <Divider />
                </HeaderLine>
              )}
            </FeedHeader>
          </ProjectArea>
          {errorMessage ? (
            <Text>{errorMessage}</Text>
          ) : (
            updates?.length! > 0 &&
            updates?.map((update, key) => {
              return <FeedCard data={update} key={key} />;
            })
          )}
          {updates?.length! > 0 && (
            <PaginationButtons
              current={updatesPage}
              total={updatesTotalPages}
              forwardFunction={() => handleUpdatesPageChange(updatesPage + 1)}
              backFunction={() => handleUpdatesPageChange(updatesPage - 1)}
            />
          )}
        </>
      )}
    </>
  );
}

export default ProjectDetails;
