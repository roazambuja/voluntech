import { Plus } from "react-feather";
import { Button } from "../../../components/Button";
import { Text } from "../../../styles/global";
import { ConfigSection, CustomPaper as Paper, CustomTitle as Title, TextArea } from "./styles";

function Configurations(): JSX.Element {
  return (
    <Paper>
      <ConfigSection>
        <TextArea>
          <Title>Redes Sociais</Title>
          <Text>Não cadastrado</Text>
        </TextArea>
        <Button variant="rounded">
          <Plus strokeWidth={3} />
          Cadastrar
        </Button>
      </ConfigSection>
      <ConfigSection>
        <TextArea>
          <Title>Chave PIX</Title>
          <Text>Não cadastrado</Text>
        </TextArea>
        <Button variant="rounded">
          <Plus strokeWidth={3} />
          Cadastrar
        </Button>
      </ConfigSection>
    </Paper>
  );
}

export default Configurations;
