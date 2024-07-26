import { useEffect, useState } from "react";
import LogoSvg from "../../assets/logo.svg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Divider } from "../../components/Divider";
import { Form, Link, Screen } from "../../styles/global";
import {
  BottomArea,
  CustomPaper,
  CustomText,
  ErrorMessage,
  FormContainer,
  ImageContainer,
  LoginImage,
  Logo,
} from "./styles";
import { ImageProps, imageList } from "./images";
import { AuthInterface, login } from "../../services/auth";

function Login(): JSX.Element {
  const [image, setImage] = useState<ImageProps>(imageList[0]);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);

  function sortImage() {
    let index = Math.floor(Math.random() * imageList.length);
    setImage(imageList[index]);
  }

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body: AuthInterface = {
      email,
      password,
    };

    try {
      setLoading(true);
      let response = await login(body);
      console.log(response.data.message);
    } catch (error: any) {
      console.log(error);
      error.response?.data
        ? setErrorMessage(error.response.data.message)
        : setErrorMessage("Ocorreu um erro ao realizar o login.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    sortImage();
  }, []);

  return (
    <Screen>
      <CustomPaper>
        <ImageContainer>
          <LoginImage src={image.link} alt={image.description} />
        </ImageContainer>
        <FormContainer>
          <Logo src={LogoSvg} alt="Logo da aplicação Voluntech" />
          <Form onSubmit={handleLogin}>
            <Input
              id="email"
              label="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="password"
              type="password"
              label="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <Button type="submit" variant="primary" disabled={loading}>
              Entrar
            </Button>
          </Form>
          <BottomArea>
            <CustomText>
              Não possui uma conta? <Link to="/cadastro">Cadastre-se.</Link>
            </CustomText>
            <Divider text="ou" />
            <Button variant="secondary">Entrar como visitante</Button>
          </BottomArea>
        </FormContainer>
      </CustomPaper>
    </Screen>
  );
}

export default Login;
