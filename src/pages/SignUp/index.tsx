import { BaseSyntheticEvent, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Stepper } from "../../components/Stepper";
import { ToggleButton } from "../../components/ToggleButton";
import { Form, Link, Paper, Text, Title } from "../../styles/global";
import { CheckIcon, ErrorIcon, TitleArea } from "./styles";
import { Informations } from "./Informations";
import { Address } from "./Address";
import { ProfilePicture } from "./ProfilePicture";
import { Organization } from "./Organization";
import { postUser } from "../../services/users";
import { Loader } from "../../components/Loader";
import { useNavigate } from "react-router-dom";
import { AuthInterface, login } from "../../services/auth";
import { useAuth } from "../../contexts/AuthContext";

function SignUp(): JSX.Element {
  const navigate = useNavigate();
  const { login: loginContext } = useAuth();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<string>("Voluntário");
  const [totalSteps, setTotalSteps] = useState<number>(3);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>("");

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

  const [image, setImage] = useState<File | null>(null);

  const volunteerMessages = [
    ["Já possui uma conta? ", <Link to="/login">Faça login.</Link>],
    "Preencha as informações de localização.",
    "Selecione sua foto do perfil.",
    "Seu cadastro foi finalizado com sucesso!",
  ];

  const organizationSteps = [
    ["Já possui uma conta? ", <Link to="/login">Faça login.</Link>],
    "Preencha as informações sobre sua organização.",
    "Preencha as informações de localização.",
    "Selecione sua foto do perfil.",
    "Seu cadastro foi finalizado com sucesso!",
  ];

  function nextStep(event: BaseSyntheticEvent) {
    event.preventDefault();
    if (password === confirmPassword) {
      setPasswordError("");
      setCurrentStep(currentStep + 1);

      if (currentStep === totalSteps) {
        handleSignUp();
      }
    } else {
      setPasswordError("As senhas digitadas devem ser iguais.");
    }
  }

  function previousStep() {
    setCurrentStep(currentStep - 1);
  }

  async function handleSignUp() {
    const user = {
      name,
      email,
      password,
      role: selectedType,
      cep,
      state,
      city,
      cause: cause === "Outro" ? customCause : cause,
    } as { [key: string]: any };

    if (description !== "") {
      user.description = description;
    }

    const formData = new FormData();
    Object.keys(user).forEach((key) => {
      formData.append(key, user[key]);
    });

    if (image) {
      formData.append("profilePicture", image);
    }

    try {
      setLoading(true);
      let response = await postUser(formData);
      setMessage(response.data.message);
    } catch (error: any) {
      setMessage("Ocorreu um erro ao realizar seu cadastro. Tente novamente.");
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function authenticateUser() {
    const body: AuthInterface = {
      email,
      password,
    };

    try {
      setLoading(true);
      let response = await login(body);
      const { token } = response.data;
      loginContext(token);
      navigate("/perfil");
    } catch (error: any) {
      navigate("/login");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    selectedType === "Voluntário" ? setTotalSteps(3) : setTotalSteps(4);
  }, [selectedType]);

  return (
    <Paper>
      {loading ? (
        <Loader />
      ) : (
        <>
          <TitleArea>
            {message ? (
              <>
                {error ? <ErrorIcon /> : <CheckIcon />}
                <Text>{message}</Text>
              </>
            ) : (
              <>
                <Title>Cadastrar</Title>
                <Text>
                  {selectedType === "Voluntário"
                    ? volunteerMessages[currentStep - 1]
                    : organizationSteps[currentStep - 1]}
                </Text>
              </>
            )}
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
                  passwordError={passwordError}
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
                <Address
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
                <ProfilePicture previousStep={previousStep} setImage={setImage} />
              )}
            </Form>
          ) : (
            <Button type="button" onClick={authenticateUser}>
              Ir para a página inicial
            </Button>
          )}
        </>
      )}
    </Paper>
  );
}

export default SignUp;
