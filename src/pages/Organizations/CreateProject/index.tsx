import { useState } from "react";
import { Input } from "../../../components/Input";
import { Form, Paper, Title } from "../../../styles/global";
import { TextArea } from "../../../components/TextArea";
import { Button } from "../../../components/Button";
import { Picture } from "../../../components/Picture";
import { createProject } from "../../../services/project";
import { Loader } from "../../../components/Loader";
import { Message } from "../../../components/Message";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function CreateProject(): JSX.Element {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [createdId, setCreatedId] = useState();

  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }

    const file = event.target.files && event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const project = { title, description } as { [key: string]: any };

    const formData = new FormData();
    Object.keys(project).forEach((key) => {
      formData.append(key, project[key]);
    });

    if (image) {
      formData.append("headerPicture", image);
    }

    try {
      setLoading(true);
      let { data } = await createProject(formData);
      setCreatedId(data.data._id);
      setMessage(data.message);
    } catch (error: any) {
      setMessage("Ocorreu um erro ao cadastrar seu projeto. Tente novamente.");
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Paper>
      {loading ? (
        <Loader />
      ) : user?.role === "Organização" ? (
        !message ? (
          <>
            <Title>Novo Projeto</Title>
            <Form onSubmit={handleSubmit}>
              <Input
                required
                label="Título"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextArea
                required
                label="Descrição"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Picture variant="header" src={imageUrl ? imageUrl : undefined} alt="Foto de capa" />
              <Input
                type="file"
                accept="image/*"
                id="picture"
                width="full"
                label="Selecionar foto de capa"
                onChange={handleUpload}
              />
              <Button type="submit">Cadastrar projeto</Button>
            </Form>
          </>
        ) : (
          <Message
            error={error}
            message={message}
            buttonText="Visualizar projeto"
            click={() => navigate(`/projeto/${createdId}`)}
          />
        )
      ) : (
        <Message error={true} message="Você não possui permissão para acessar essa página." />
      )}
    </Paper>
  );
}

export default CreateProject;
