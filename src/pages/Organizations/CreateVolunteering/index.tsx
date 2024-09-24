import { useEffect, useState } from "react";
import { Input } from "../../../components/Input";
import { Form, Paper, Text, Title } from "../../../styles/global";
import { TextArea } from "../../../components/TextArea";
import { Button } from "../../../components/Button";
import { Loader } from "../../../components/Loader";
import { Message } from "../../../components/Message";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { getProjectById, ProjectInterface } from "../../../services/project";
import { RadioInput } from "../../../components/RadioInput";
import { Stepper } from "../../../components/Stepper";
import { ButtonArea, TitleArea } from "../../SignUp/styles";
import { createVolunteering, VolunteeringInterface } from "../../../services/volunteering";

function CreateVolunteering(): JSX.Element {
  const { user } = useAuth();
  const { id: projectId } = useParams();
  const navigate = useNavigate();

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<ProjectInterface>();
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [selectedType, setSelectedType] = useState<string>("");
  const [customCategory, setCustomCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");

  const texts = [
    "Selecione o tipo de trabalho voluntário que gostaria de cadastrar.",
    "Forneça detalhes relevantes sobre a oportunidade de voluntariado. Para ajudar o voluntário a entender melhor, inclua informações como: descrição das atividades, data, horário, frequência e local.",
  ];

  const volunteeringList = [
    "Apoio psicológico",
    "Aulas",
    "Comunicação",
    "Cozinha",
    "Cuidados médicos",
    "Distribuição de materiais",
    "Doação financeira",
    "Entretenimento",
    "Lar Temporário",
    "Limpeza",
    "Logística",
    "Trabalho Manual",
    "Transporte",
    "Triagem de doações",
    "Veterinário",
    "Outro",
  ];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCurrentStep(currentStep + 1);

    if (currentStep === 2) {
      let category = selectedType;
      if (selectedType === "Outro") {
        category = customCategory;
      }

      if (project) {
        const payload = { category, description, whatsapp, project };

        try {
          setLoading(true);
          let response = await createVolunteering(payload);
          setMessage(response.data.message);
        } catch (error: any) {
          setError(true);
          error.response?.data.message
            ? setMessage(error.response.data.message)
            : setMessage("Ocorreu um erro ao cadastrar o voluntariado. Tente novamente.");
          setError(true);
        } finally {
          setLoading(false);
        }
      }
    }
  }

  async function getProject() {
    try {
      setLoading(true);
      let response = await getProjectById(projectId!);
      const { project } = response.data;
      setProject(project);
    } catch (error: any) {
      setError(true);
      setMessage("Não foi possível exibir os dados do projeto. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProject();
  }, []);

  return (
    <Paper>
      {loading ? (
        <Loader />
      ) : user?.role === "Organização" && user._id == project?.organization._id ? (
        !message ? (
          <>
            <TitleArea>
              <Title>Cadastrar Voluntariado</Title>
              <Text>{texts[currentStep - 1]}</Text>
            </TitleArea>
            <Stepper steps={2} current={currentStep} />
            <Form onSubmit={handleSubmit}>
              {currentStep === 1 ? (
                <>
                  <RadioInput
                    required
                    options={volunteeringList}
                    title="Categoria"
                    name="volunteeringType"
                    onChange={(e) => setSelectedType(e.target.value)}
                  />
                  {selectedType === "Outro" && (
                    <Input
                      required
                      label="Categoria personalizada"
                      id="customCategory"
                      value={customCategory}
                      onChange={(e) => setCustomCategory(e.target.value)}
                    />
                  )}
                  <Button type="submit">Avançar</Button>
                </>
              ) : (
                <>
                  <TextArea
                    required
                    id="description"
                    label="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <Input
                    required
                    id="whatsapp"
                    label="WhatsApp para dúvidas"
                    placeholder="51999999999"
                    pattern="^\d{11}$"
                    title="O campo deve ter 11 caracteres (apenas números)."
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                  />
                  <ButtonArea>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => setCurrentStep(currentStep - 1)}
                    >
                      Voltar
                    </Button>
                    <Button type="submit">Cadastrar</Button>
                  </ButtonArea>
                </>
              )}
            </Form>
          </>
        ) : (
          <Message
            error={error}
            message={message}
            buttonText="Visualizar projeto"
            click={() => navigate(`/projeto/${projectId}`)}
          />
        )
      ) : (
        <Message error={true} message="Você não possui permissão para acessar essa página." />
      )}
    </Paper>
  );
}

export default CreateVolunteering;
