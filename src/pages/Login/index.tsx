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
  FormContainer,
  ImageContainer,
  LoginImage,
  Logo,
} from "./styles";
import { ImageProps, imageList } from "./images";

function Login(): JSX.Element {
  const [image, setImage] = useState<ImageProps>(imageList[0]);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function sortImage() {
    let index = Math.floor(Math.random() * imageList.length);
    setImage(imageList[index]);
  }

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(email);
    console.log(password);
  }

  useEffect(() => {
    sortImage();
  });

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
            <Button type="submit" variant="primary">
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
