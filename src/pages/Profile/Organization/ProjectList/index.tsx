import { useEffect, useState } from "react";
import { getUserProjects, ProjectInterface } from "../../../../services/project";
import { Loader } from "../../../../components/Loader";
import { ProjectList as StyledProjectList } from "./styles";
import { Text } from "../../../../styles/global";
import { CustomPaper } from "../../../Organizations/Configurations/styles";
import { Header, ListItem, Title } from "../../../Home/SearchResults/styles";

interface ProjectListProps {
  id: string;
}

function ProjectList({ id }: ProjectListProps): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [projects, setProjects] = useState<ProjectInterface[]>();
  const [message, setMessage] = useState<string>();

  async function getProjects() {
    try {
      setLoading(true);
      let response = await getUserProjects(id);
      const { projects } = response.data;
      setProjects(projects);
    } catch (error: any) {
      setMessage("Ocorreu um erro ao listar os projetos da organização.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProjects();
  }, [id]);

  return (
    <StyledProjectList>
      {loading ? (
        <Loader />
      ) : projects ? (
        projects.length > 0 ? (
          <>
            <CustomPaper>
              <Header>Projetos</Header>
              {projects?.map((project, key) => {
                return (
                  <ListItem as="a" key={key} href={`/projeto/${project._id}`} target="_blank">
                    <Title>{project.title}</Title>
                  </ListItem>
                );
              })}
            </CustomPaper>
          </>
        ) : (
          <Text>A organização não possui projetos cadastrados.</Text>
        )
      ) : (
        <Text> {message ? message : "Não foi possível listar os projetos da organização!"} </Text>
      )}
    </StyledProjectList>
  );
}

export { ProjectList };
