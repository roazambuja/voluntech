import { useNavigate } from "react-router-dom";
import { Form, Paper, Title } from "../../styles/global";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { Picture } from "../../components/Picture";
import { Input } from "../../components/Input";
import { useState } from "react";

function Post(): JSX.Element {
  const navigate = useNavigate();
  // const [images, setImages] =
  const [text, setText] = useState<string>();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log();
  }

  return (
    <Paper>
      <Form onSubmit={handleSubmit}>
        <Title>Nova publicação</Title>
        <TextArea
          required
          label="O que você quer compartilhar?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Picture variant="header" />
        <Input
          type="file"
          label="Adicionar imagens"
          accept="image/*"
          id="pictures"
          width="full"
          // onChange={handleUpload}
        />
        <Button type="submit">Publicar</Button>
      </Form>
    </Paper>
  );
}

export default Post;
