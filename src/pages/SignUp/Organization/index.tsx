import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { RadioInput } from "../../../components/RadioInput";
import { TextArea } from "../../../components/TextArea";
import { ButtonArea } from "../styles";

interface OrganizationProps {
  cause: string;
  setCause: React.Dispatch<React.SetStateAction<string>>;
  customCause: string;
  setCustomCause: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  previousStep: () => void;
}

function Organization({
  cause,
  setCause,
  customCause,
  setCustomCause,
  description,
  setDescription,
  previousStep,
}: OrganizationProps): JSX.Element {
  const causes = [
    "Apoio a Pessoas com Deficiência",
    "Combate à pobreza",
    "Comunidade LGBTQIA+",
    "Defesa dos animais",
    "Direitos das Crianças e Adolescentes",
    "Direitos dos idosos",
    "Educação",
    "Igualdade de Gênero",
    "Promoção da Cultura",
    "Proteção Ambiental",
    "Saúde",
    "Segurança Alimentar",
    "Outro",
  ];
  return (
    <>
      <RadioInput
        required
        options={causes}
        title="Causa"
        name="cause"
        onChange={(e) => setCause(e.target.value)}
      />
      {cause === "Outro" && (
        <Input
          required
          id="customCause"
          label={"Outro"}
          value={customCause}
          onChange={(e) => setCustomCause(e.target.value)}
        />
      )}
      <TextArea
        id="description"
        label="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
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

export { Organization };
