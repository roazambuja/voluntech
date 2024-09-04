import { useState } from "react";
import { Input } from "../../components/Input";
import { Form, Paper, Title } from "../../styles/global";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { Picture } from "../../components/Picture";

function CreateProject(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <Paper>
      <Title>Novo Projeto</Title>
      <Form>
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
    </Paper>
  );
}

export default CreateProject;
