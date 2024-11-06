import { useNavigate } from "react-router-dom";
import LogoSvg from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import { Container, Logo, Strong, Text } from "./styles";

function Introduction(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo src={LogoSvg} alt="Logo da aplicação Voluntech" />
      <Text>
        Nosso objetivo é conectar ONGs e voluntários, auxiliando na divulgação de projetos e
        oportunidades de trabalho voluntário.{" "}
        <Strong>Cadastre-se e comece a fazer a diferença!</Strong>
      </Text>
      <Button onClick={() => navigate("/login")}>Entrar</Button>
    </Container>
  );
}

export default Introduction;
