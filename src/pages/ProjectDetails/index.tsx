import { useParams } from "react-router-dom";
import { Paper, Text, Title } from "../../styles/global";
import { useEffect, useState } from "react";
import { getProjectById, ProjectInterface } from "../../services/project";
import { Loader } from "../../components/Loader";
import { Message } from "../../components/Message";
import { Divider } from "../../components/Divider";
import { CustomPaper, DefaultHeader, HeaderImage, InformationsArea, TitleArea } from "./styles";

function ProjectDetails(): JSX.Element {
  const { id } = useParams();

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
        <Loader />
      ) : message ? (
        <Paper>
          <Message message={message} error={true} />
        </Paper>
      ) : (
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
              <Text>Projeto de {project?.organization.name}</Text>
            </TitleArea>
            <Divider />
            <Text>{project?.description}</Text>
          </InformationsArea>
        </CustomPaper>
      )}
    </>
  );
}

export default ProjectDetails;