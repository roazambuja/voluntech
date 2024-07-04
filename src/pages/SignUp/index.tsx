import { BaseSyntheticEvent, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Stepper } from "../../components/Stepper";
import { ToggleButton } from "../../components/ToggleButton";
import { Text, Title } from "../../styles/global";
import { CheckIcon, Container, CustomPaper, CustomStrong, Form, TitleArea } from "./styles";
import { Informations } from "./Informations";
import { Adress } from "./Adress";
import { ProfilePicture } from "./ProfilePicture";
import { Organization } from "./Organization";
import { useNavigate } from "react-router-dom";

function SignUp(): JSX.Element {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<string>("Voluntário");
  const [totalSteps, setTotalSteps] = useState<number>(3);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [cause, setCause] = useState<string>("");
  const [customCause, setCustomCause] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [cep, setCep] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const [image, setImage] = useState<string | null>(null);

  const volunteerMessages = [
    [
      "Já possui uma conta? ",
      <CustomStrong onClick={() => navigate("/")}>Faça login.</CustomStrong>,
    ],
    "Preencha as informações de localização.",
    "Selecione sua foto do perfil.",
    "Seu cadastro foi finalizado com sucesso!",
  ];

  const organizationSteps = [
    [
      "Já possui uma conta? ",
      <CustomStrong onClick={() => navigate("/")}>Faça login.</CustomStrong>,
    ],
    "Preencha as informações sobre sua organização.",
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

  function handleSignUp() {
    setCurrentStep(currentStep + 1);
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    console.log(cause);
    console.log(customCause);
    console.log(description);
    console.log(cep);
    console.log(state);
    console.log(city);
    console.log(image);
  }

  useEffect(() => {
    selectedType === "Voluntário" ? setTotalSteps(3) : setTotalSteps(4);
  }, [selectedType]);

  return (
    <Container>
      <CustomPaper>
        <TitleArea>
          {currentStep === totalSteps + 1 ? <CheckIcon /> : <Title>Cadastrar</Title>}
          <Text>
            {selectedType === "Voluntário"
              ? volunteerMessages[currentStep - 1]
              : organizationSteps[currentStep - 1]}
          </Text>
        </TitleArea>
        {currentStep === 1 && (
          <ToggleButton
            firstTitle="Voluntário"
            secondTitle="Organização"
            setSelected={setSelectedType}
          />
        )}
        <Stepper steps={totalSteps} current={currentStep} />
        {currentStep <= totalSteps ? (
          <Form onSubmit={nextStep}>
            {currentStep === 1 && (
              <Informations
                type={selectedType}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
              />
            )}

            {currentStep === 2 && selectedType === "Organização" && (
              <Organization
                cause={cause}
                setCause={setCause}
                customCause={customCause}
                setCustomCause={setCustomCause}
                description={description}
                setDescription={setDescription}
                previousStep={previousStep}
              />
            )}

            {((currentStep === 2 && selectedType === "Voluntário") ||
              (currentStep === 3 && selectedType === "Organização")) && (
              <Adress
                cep={cep}
                setCep={setCep}
                state={state}
                setState={setState}
                city={city}
                setCity={setCity}
                previousStep={previousStep}
              />
            )}

            {((currentStep === 3 && selectedType === "Voluntário") ||
              (currentStep === 4 && selectedType === "Organização")) && (
              <ProfilePicture
                handleSignUp={handleSignUp}
                previousStep={previousStep}
                image={image}
                setImage={setImage}
              />
            )}
          </Form>
        ) : (
          <Button type="button">Ir para a página inicial</Button>
        )}
      </CustomPaper>
    </Container>
  );
}

export default SignUp;
