import { useEffect, useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Form, Paper, Title } from "../../../styles/global";
import { Loader } from "../../../components/Loader";
import { Message } from "../../../components/Message";
import {
  createSocialMedia,
  getSocialMediaById,
  SocialMediaInterface,
  updateSocialMedia,
} from "../../../services/socialMedia";
import { useParams } from "react-router-dom";

function SocialMedia(): JSX.Element {
  const [whatsapp, setWhatsapp] = useState<string>();
  const [instagram, setInstagram] = useState<string>();
  const [facebook, setFacebook] = useState<string>();
  const [tiktok, setTiktok] = useState<string>();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  const { id } = useParams();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = { whatsapp, instagram, facebook, tiktok };

    let response;

    try {
      setLoading(true);
      if (id) {
        response = await updateSocialMedia(id, payload);
      } else {
        response = await createSocialMedia(payload);
      }
      setMessage(response.data.message);
    } catch (error: any) {
      error.response?.data.message
        ? setMessage(error.response.data.message)
        : id
        ? setMessage("Ocorreu um erro ao editar suas redes sociais. Tente novamente.")
        : setMessage("Ocorreu um erro ao cadastrar suas redes sociais. Tente novamente.");
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function getSocialMedia() {
    try {
      setLoading(true);
      let { data } = await getSocialMediaById(id!);
      if (data.socialMedia) {
        const socialMedia: SocialMediaInterface = data.socialMedia;
        setInstagram(socialMedia.instagram);
        setFacebook(socialMedia.facebook);
        setWhatsapp(socialMedia.whatsapp);
        setTiktok(socialMedia.tiktok);
      }
    } catch {
      setError(true);
      setMessage("Não foi possível buscar suas redes sociais. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      getSocialMedia();
    }
  }, []);

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
          <Button type="submit">{id ? "Editar" : "Cadastrar"}</Button>
        </Form>
      ) : (
        <Message error={error} message={message} />
      )}
    </Paper>
  );
}

export default SocialMedia;
