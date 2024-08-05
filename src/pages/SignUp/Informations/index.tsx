import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { ErrorMessage } from "../../../styles/global";

interface InformationProps {
  type: string;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  passwordError: string;
}

function Informations({
  type,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  passwordError,
}: InformationProps): JSX.Element {
  return (
    <>
      <Input
        required
        id="name"
        label={type === "Voluntário" ? "Nome" : "Nome da organização"}
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
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*])[A-Za-z\d#?!@$%^&*]{8,}$"
        title="Sua senha deve ter no mínimo 8 caracteres, uma letra maíuscula, uma letra minúscula, um número e um caractere especial."
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
      {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}

      <Button type="submit">Avançar</Button>
    </>
  );
}

export { Informations };
