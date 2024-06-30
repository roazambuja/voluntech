import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { ButtonArea } from "../styles";

interface AdressProps {
  cep: string;
  setCep: React.Dispatch<React.SetStateAction<string>>;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  previousStep: () => void;
}

function Adress({
  cep,
  setCep,
  state,
  setState,
  city,
  setCity,
  previousStep,
}: AdressProps): JSX.Element {
  return (
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
  );
}

export { Adress };
