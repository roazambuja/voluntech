import { useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { getCep } from "../../../services/cep";
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

function Address({
  cep,
  setCep,
  state,
  setState,
  city,
  setCity,
  previousStep,
}: AdressProps): JSX.Element {
  const [disableFields, setDisableFields] = useState<boolean>(false);

  async function handleCep() {
    try {
      let data = await getCep(cep);
      if (data) {
        if (!data.erro) {
          setCity(data.localidade);
          setState(data.uf);
          setDisableFields(true);
        }
      }
    } catch {
      console.log("Erro na API ViaCEP");
    }
  }

  return (
    <>
      <Input
        required
        id="cep"
        label={"CEP"}
        value={cep}
        pattern="^\d{8}$"
        title="O campo deve ter 8 caracteres (apenas números)."
        onChange={(e) => setCep(e.target.value)}
        onBlur={handleCep}
      />
      <Input
        required
        id="state"
        label="Estado"
        value={state}
        disabled={disableFields}
        onChange={(e) => setState(e.target.value)}
      />
      <Input
        required
        id="city"
        label="Cidade"
        value={city}
        disabled={disableFields}
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

export { Address };
