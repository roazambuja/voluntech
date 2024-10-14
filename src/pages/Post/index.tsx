import { useNavigate } from "react-router-dom";
import { Form, Paper, Title } from "../../styles/global";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { Picture } from "../../components/Picture";
import { Input } from "../../components/Input";
import { useState } from "react";
import { UploadedImages } from "./styles";

function Post(): JSX.Element {
  const navigate = useNavigate();
  const [text, setText] = useState<string>();
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);

  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setImages((prevImages) => [...prevImages, ...fileArray]);

      const newImageUrls = fileArray.map((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise<string>((resolve) => {
          reader.onloadend = () => {
            resolve(reader.result as string);
          };
        });
      });

      Promise.all(newImageUrls).then((urls) => {
        setImageUrls((prevUrls) => [...prevUrls, ...urls]);
      });
    }
  }

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
        <UploadedImages>
          {imageUrls.length === 0 ? (
            <Picture variant="header" />
          ) : (
            imageUrls.map((url, index) => <Picture key={index} variant="profile" src={url} />)
          )}
        </UploadedImages>
        <Input
          type="file"
          label="Adicionar imagens"
          accept="image/*"
          id="pictures"
          width="full"
          multiple
          onChange={handleUpload}
        />
        <Button type="submit">Publicar</Button>
      </Form>
    </Paper>
  );
}

export default Post;
