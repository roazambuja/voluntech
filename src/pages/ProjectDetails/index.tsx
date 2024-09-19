import { useNavigate, useParams } from "react-router-dom";
import { Link, Paper, Text, Title } from "../../styles/global";
import { useEffect, useState } from "react";
import { getProjectById, ProjectInterface } from "../../services/project";
import { Loader } from "../../components/Loader";
import { Message } from "../../components/Message";
import { Divider } from "../../components/Divider";
import { CustomPaper, DefaultHeader, HeaderImage, InformationsArea, TitleArea } from "./styles";
import { Screen } from "../MainLayout/styles";
import { FeedHeader, ProjectArea } from "../Profile/styles";
import { Button } from "../../components/Button";
import { useAuth } from "../../contexts/AuthContext";

function ProjectDetails(): JSX.Element {
  const { id } = useParams();
  const { user: loggedUser } = useAuth();
  const navigate = useNavigate();

  const [project, setProject] = useState<ProjectInterface>();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  async function getProject() {
    try {
      setLoading(true);
      let response = await getProjectById(id!);
      const { project } = response.data;
      setProject(project);
    } catch (error: any) {
      setMessage("Não foi possível exibir os dados do projeto. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

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
            </InformationsArea>
          </CustomPaper>
          <ProjectArea>
            <FeedHeader>
              {loggedUser?._id === project?.organization._id && (
                <>
                  <Divider />
                  <Button variant="rounded" onClick={() => navigate("/cadastrarVoluntariado")}>
                    Registrar trabalho voluntário
                  </Button>
                </>
              )}
            </FeedHeader>
          </ProjectArea>
        </>
      )}
    </>
  );
}

export default ProjectDetails;
