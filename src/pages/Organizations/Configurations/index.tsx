import { Plus, Edit3 } from "react-feather";
import { Button } from "../../../components/Button";
import { Text, Paper as GlobalPaper } from "../../../styles/global";
import { ConfigSection, CustomPaper as Paper, CustomTitle as Title, TextArea } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { getPixByUser, PixInterface } from "../../../services/pix";
import { keyTypeLabels } from "../Pix";
import { getSocialMediaByUser, SocialMediaInterface } from "../../../services/socialMedia";
import { listSocialMedia } from "../../../utils/listSocialMedia";
import { Loader } from "../../../components/Loader";
import { Message } from "../../../components/Message";

function Configurations(): JSX.Element {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);

  const [pixMessage, setPixMessage] = useState<string>();
  const [pix, setPix] = useState<PixInterface>();

  const [socialMediaMessage, setSocialMediaMessage] = useState<string>();
  const [socialMedia, setSocialMedia] = useState<SocialMediaInterface>();

  async function getPix() {
    if (user?.role === "Organização")
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
      } finally {
        setLoading(false);
      }
  }

  async function getSocialMedia() {
    if (user?.role === "Organização")
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
        setSocialMediaMessage("Não foi possível buscar as redes sociais.");
      } finally {
        setLoading(false);
      }
  }

  useEffect(() => {
    getPix();
    getSocialMedia();
  }, []);

  return user?.role === "Voluntário" || user?.role === "Visitante" ? (
    <GlobalPaper>
      <Message error={true} message="Você não possui permissão para acessar essa página." />
    </GlobalPaper>
  ) : (
    <Paper>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ConfigSection>
            <TextArea>
              <Title>Redes Sociais</Title>
              <Text>{socialMediaMessage}</Text>
            </TextArea>
            <Button
              variant="rounded"
              mode={socialMedia ? "edit" : "create"}
              icon={socialMedia ? Edit3 : Plus}
              onClick={() =>
                navigate("/cadastrarRedesSociais" + (socialMedia ? `/${socialMedia?._id}` : ""))
              }
            >
              {socialMedia ? "Editar" : "Cadastrar"}
            </Button>
          </ConfigSection>
          <ConfigSection>
            <TextArea>
              <Title>Chave PIX</Title>
              <Text>{pixMessage}</Text>
            </TextArea>
            <Button
              variant="rounded"
              mode={pix ? "edit" : "create"}
              icon={pix ? Edit3 : Plus}
              onClick={() => navigate("/cadastrarPix" + (pix ? `/${pix?._id}` : ""))}
            >
              {pix ? "Editar" : "Cadastrar"}
            </Button>
          </ConfigSection>
        </>
      )}
    </Paper>
  );
}

export default Configurations;
