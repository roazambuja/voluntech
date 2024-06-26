import { BaseSyntheticEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Stepper } from "../../components/Stepper";
import { ToggleButton } from "../../components/ToggleButton";
import { Text, Title, Strong } from "../../styles/global";
import { Container, CustomPaper, Form, TitleArea } from "./styles";

function SignUp(): JSX.Element {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<string>("Voluntário");

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  function nextStep(event: BaseSyntheticEvent) {
    event.preventDefault();
    setCurrentStep(currentStep + 1);

    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
  }

  return (
    <Container>
      <CustomPaper>
        <TitleArea>
          <Title>Cadastro</Title>
          <Text>
            Já possui uma conta? <Strong>Faça login.</Strong>
          </Text>
        </TitleArea>
        <ToggleButton
          firstTitle="Voluntário"
          secondTitle="Organização"
          setSelected={setSelectedType}
        />
        <Stepper steps={selectedType == "Voluntário" ? 4 : 5} current={currentStep} />
        <Form onSubmit={nextStep}>
          <Input
            required
            id="name"
            label={selectedType == "Voluntário" ? "Nome" : "Nome da organização"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            required
            id="email"
            type="email"
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            required
            id="password"
            type="password"
            label="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            required
            id="confirmPassword"
            type="password"
            label="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit">Avançar</Button>
        </Form>
      </CustomPaper>
    </Container>
  );
}

export default SignUp;
