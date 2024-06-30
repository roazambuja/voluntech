import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

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
}: InformationProps): JSX.Element {
  return (
    <>
      <Input
        // required
        id="name"
        label={type === "Voluntário" ? "Nome" : "Nome da organização"}
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
  );
}

export { Informations };
