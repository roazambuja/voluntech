import { BaseSyntheticEvent, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Stepper } from "../../components/Stepper";
import { ToggleButton } from "../../components/ToggleButton";
import { Text, Title, Strong } from "../../styles/global";
import {
  ButtonArea,
  CheckIcon,
  Container,
  CustomPaper,
  Form,
  ProfilePicture,
  TitleArea,
  UploadIcon,
  UserIcon,
} from "./styles";

function SignUp(): JSX.Element {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<string>("Voluntário");
  const [totalSteps, setTotalSteps] = useState<number>(3);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [cep, setCep] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const messages = [
    ["Já possui uma conta? ", <Strong>Faça login</Strong>],
    "Preencha as informações de localização.",
    "Selecione sua foto do perfil.",
    "Seu cadastro foi finalizado com sucesso!",
  ];

  function nextStep(event: BaseSyntheticEvent) {
    event.preventDefault();
    setCurrentStep(currentStep + 1);
  }

  function previousStep() {
    setCurrentStep(currentStep - 1);
  }

  useEffect(() => {
    selectedType === "Voluntário" ? setTotalSteps(3) : setTotalSteps(5);
  }, [selectedType]);

  return (
    <Container>
      <CustomPaper>
        <TitleArea>
          {currentStep === totalSteps + 1 ? <CheckIcon /> : <Title>Cadastrar</Title>}
          <Text>{messages[currentStep - 1]}</Text>
        </TitleArea>
        {currentStep === 1 && (
          <ToggleButton
            firstTitle="Voluntário"
            secondTitle="Organização"
            setSelected={setSelectedType}
          />
        )}
        <Stepper steps={totalSteps} current={currentStep} />
        <Form onSubmit={nextStep}>
          {currentStep === 1 && (
            <>
              <Input
                // required
                id="name"
                label={selectedType === "Voluntário" ? "Nome" : "Nome da organização"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                // required
                id="email"
                type="email"
                label="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                // required
                id="password"
                type="password"
                label="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                // required
                id="confirmPassword"
                type="password"
                label="Confirme sua senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button type="submit">Avançar</Button>
            </>
          )}

          {currentStep === 2 && (
            <>
              <Input
                // required
                id="cep"
                label={"CEP"}
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
              <Input
                // required
                id="state"
                label="Estado"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <Input
                // required
                id="city"
                label="Cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <ButtonArea>
                <Button type="button" variant="secondary" onClick={previousStep}>
                  Voltar
                </Button>
                <Button type="submit">Avançar</Button>
              </ButtonArea>
            </>
          )}

          {currentStep === 3 && (
            <>
              <ProfilePicture>
                <UserIcon />
              </ProfilePicture>
              <Input
                type="file"
                accept="image/*"
                id="picture"
                label={[<UploadIcon />, "Selecionar foto"]}
              />
              <ButtonArea>
                <Button type="button" variant="secondary" onClick={previousStep}>
                  Voltar
                </Button>
                <Button type="submit">Finalizar Cadastro</Button>
              </ButtonArea>
            </>
          )}

          {currentStep === 4 && (
            <>
              <Button type="button">Ir para a página inicial</Button>
            </>
          )}
        </Form>
      </CustomPaper>
    </Container>
  );
}

export default SignUp;
