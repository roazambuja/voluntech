import { Plus, Edit3 } from "react-feather";
import { Button } from "../../../components/Button";
import { Text } from "../../../styles/global";
import { ConfigSection, CustomPaper as Paper, CustomTitle as Title, TextArea } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { getPixByUser, PixInterface } from "../../../services/pix";
import { keyTypeLabels } from "../Pix";

function Configurations(): JSX.Element {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [pixMessage, setPixMessage] = useState<string>();
  const [pix, setPix] = useState<PixInterface>();

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

  useEffect(() => {
    getPix();
  }, []);

  return (
    <Paper>
      <ConfigSection>
        <TextArea>
          <Title>Redes Sociais</Title>
          <Text>Não cadastrado</Text>
        </TextArea>
        <Button variant="rounded" onClick={() => navigate("/cadastrarRedesSociais")}>
          <Plus strokeWidth={3} />
          Cadastrar
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
