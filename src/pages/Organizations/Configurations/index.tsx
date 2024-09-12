import { Plus, Edit3 } from "react-feather";
import { Button } from "../../../components/Button";
import { Text } from "../../../styles/global";
import { ConfigSection, CustomPaper as Paper, CustomTitle as Title, TextArea } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { getPixByUser, PixInterface } from "../../../services/pix";
import { keyTypeLabels } from "../Pix";
import { getSocialMediaByUser, SocialMediaInterface } from "../../../services/socialMedia";

function Configurations(): JSX.Element {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [pixMessage, setPixMessage] = useState<string>();
  const [pix, setPix] = useState<PixInterface>();

  const [socialMediaMessage, setSocialMediaMessage] = useState<string>();
  const [socialMedia, setSocialMedia] = useState<SocialMediaInterface>();

  async function getPix() {
    try {
      let { data } = await getPixByUser(user?._id!);
      if (data.pix) {
        const pix: PixInterface = data.pix;
        const pixTypeLabel = keyTypeLabels[pix.type];
        setPixMessage(`${pixTypeLabel}: ${pix.key}`);
        setPix(pix);
      } else {
        setPixMessage("Não cadastrado.");
      }
    } catch {
      setPixMessage("Não foi possível buscar a chave PIX.");
    }
  }

  function listSocialMedia(socialMedia: SocialMediaInterface): string {
    const socialMediaNames: { [key: string]: string } = {
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      facebook: "Facebook",
      tiktok: "TikTok",
    };

    const listedSocialMedia = Object.entries(socialMedia)
      .filter(([key, value]) => value !== undefined && key in socialMediaNames)
      .map(([key]) => socialMediaNames[key])
      .join(", ");

    return listedSocialMedia;
  }

  async function getSocialMedia() {
    try {
      let { data } = await getSocialMediaByUser(user?._id!);
      if (data.socialMedia) {
        const socialMedia: SocialMediaInterface = data.socialMedia;
        setSocialMediaMessage(listSocialMedia(socialMedia));
        setSocialMedia(socialMedia);
      } else {
        setSocialMediaMessage("Não cadastrado.");
      }
    } catch {
      setSocialMediaMessage("Não foi possível buscar a chave PIX.");
    }
  }

  useEffect(() => {
    getPix();
    getSocialMedia();
  }, []);

  return (
    <Paper>
      <ConfigSection>
        <TextArea>
          <Title>Redes Sociais</Title>
          <Text>{socialMediaMessage}</Text>
        </TextArea>
        <Button variant="rounded" onClick={() => navigate("/cadastrarRedesSociais")}>
          {socialMedia ? (
            <>
              <Edit3 strokeWidth={3} />
              Editar
            </>
          ) : (
            <>
              <Plus strokeWidth={3} />
              Cadastrar
            </>
          )}
        </Button>
      </ConfigSection>
      <ConfigSection>
        <TextArea>
          <Title>Chave PIX</Title>
          <Text>{pixMessage}</Text>
        </TextArea>
        <Button variant="rounded" onClick={() => navigate("/cadastrarPix")}>
          {pix ? (
            <>
              <Edit3 strokeWidth={3} />
              Editar
            </>
          ) : (
            <>
              <Plus strokeWidth={3} />
              Cadastrar
            </>
          )}
        </Button>
      </ConfigSection>
    </Paper>
  );
}

export default Configurations;
