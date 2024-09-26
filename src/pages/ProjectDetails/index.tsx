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
import { FeedHeader, ProjectArea } from "../Profile/styles";
import { Button } from "../../components/Button";
import { useAuth } from "../../contexts/AuthContext";
import { Plus } from "react-feather";
import { VolunteeringCard } from "../../components/VolunteeringCard";
import { getProjectVolunteering, VolunteeringInterface } from "../../services/volunteering";

function ProjectDetails(): JSX.Element {
  const { id } = useParams();
  const { user: loggedUser } = useAuth();
  const navigate = useNavigate();

  const [project, setProject] = useState<ProjectInterface>();
  const [volunteering, setVolunteering] = useState<VolunteeringInterface[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  async function getProject() {
    try {
      setLoading(true);
      let response = await getProjectById(id!);
      const { project } = response.data;
      setProject(project);
      getVolunteering(project._id);
    } catch (error: any) {
      setMessage("Não foi possível exibir os dados do projeto. Tente novamente.");
    } finally {
      setLoading(false);
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
            </InformationsArea>
          </CustomPaper>
          <ProjectArea>
            <FeedHeader>
              {loggedUser?._id === project?.organization._id && (
                <>
                  <Divider />
                  <Button
                    variant="rounded"
                    icon={Plus}
                    onClick={() => navigate(`/cadastrarVoluntariado/${project?._id}`)}
                  >
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
