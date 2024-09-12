import { Plus } from "react-feather";
import { Button } from "../../../components/Button";
import { Text } from "../../../styles/global";
import { ConfigSection, CustomPaper as Paper, CustomTitle as Title, TextArea } from "./styles";
import { useNavigate } from "react-router-dom";

function Configurations(): JSX.Element {
  const navigate = useNavigate();

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
          <Text>Não cadastrado</Text>
        </TextArea>
        <Button variant="rounded" onClick={() => navigate("/cadastrarPix")}>
          <Plus strokeWidth={3} />
          Cadastrar
        </Button>
      </ConfigSection>
    </Paper>
  );
}

export default Configurations;
