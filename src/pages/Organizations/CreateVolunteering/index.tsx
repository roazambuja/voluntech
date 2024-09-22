import { useEffect, useState } from "react";
import { Input } from "../../../components/Input";
import { Form, Paper, Title } from "../../../styles/global";
import { TextArea } from "../../../components/TextArea";
import { Button } from "../../../components/Button";
import { Loader } from "../../../components/Loader";
import { Message } from "../../../components/Message";
import { useAuth } from "../../../contexts/AuthContext";
import { useParams } from "react-router-dom";
import { getProjectById, ProjectInterface } from "../../../services/project";

function CreateVolunteering(): JSX.Element {
  const { user } = useAuth();
  const { id: projectId } = useParams();

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<ProjectInterface>();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  async function getProject() {
    try {
      setLoading(true);
      let response = await getProjectById(projectId!);
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
    <Paper>
      {loading ? (
        <Loader />
      ) : user?.role === "Organização" && user._id == project?.organization._id ? (
        !message ? (
          <>
            <Title>Trabalho Voluntário</Title>
            <Form onSubmit={handleSubmit}>
              <Button type="submit">Cadastrar</Button>
            </Form>
          </>
        ) : (
          <Message error={error} message={message} buttonText="Visualizar projeto" />
        )
      ) : (
        <Message error={true} message="Você não possui permissão para acessar essa página." />
      )}
    </Paper>
  );
}

export default CreateVolunteering;
