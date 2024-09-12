import { useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Form, Paper, Title } from "../../../styles/global";
import { Loader } from "../../../components/Loader";
import { Message } from "../../../components/Message";
import { createSocialMedia } from "../../../services/socialMedia";

function SocialMedia(): JSX.Element {
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [facebook, setFacebook] = useState<string>("");
  const [tiktok, setTiktok] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = { whatsapp, instagram, facebook, tiktok };

    try {
      setLoading(true);
      let response = await createSocialMedia(payload);
      setMessage(response.data.message);
    } catch (error: any) {
      error.response?.data.message
        ? setMessage(error.response.data.message)
        : setMessage("Ocorreu um erro ao cadastrar suas redes sociais. Tente novamente");
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Paper>
      {loading ? (
        <Loader />
      ) : !message ? (
        <Form onSubmit={handleSubmit}>
          <Title>Redes Sociais</Title>
          <Input
            label="WhatsApp"
            id="whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <Input
            label="Instagram"
            id="instagram"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
          <Input
            label="Facebook"
            id="facebook"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
          <Input
            label="TikTok"
            id="tiktok"
            value={tiktok}
            onChange={(e) => setTiktok(e.target.value)}
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
      ) : (
        <Message error={error} message={message} />
      )}
    </Paper>
  );
}

export default SocialMedia;
