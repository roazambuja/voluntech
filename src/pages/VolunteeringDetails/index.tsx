import { useParams } from "react-router-dom";
import { Link, Paper, Text, Title } from "../../styles/global";
import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader";
import { Message } from "../../components/Message";
import { Divider } from "../../components/Divider";
import { Screen } from "../MainLayout/styles";
import { Check, MoreHorizontal, X } from "react-feather";
import { getVolunteering, VolunteeringInterface } from "../../services/volunteering";
import { CustomPaper, InformationsArea, TitleArea } from "../ProjectDetails/styles";
import { Button, ButtonsArea, ContactButton, Header, Icon } from "./styles";
import { VolunteeringProps } from "../../components/VolunteeringCard/volunteering";
import { theme } from "../../styles/theme";
import volunteeringList from "../../components/VolunteeringCard/volunteering";
import { FaWhatsapp } from "react-icons/fa";
import { alreadyParticipates, participate } from "../../services/participation";
import { useAuth } from "../../contexts/AuthContext";

function VolunteeringDetails(): JSX.Element {
  const { id } = useParams();
  const { user } = useAuth();

  const [volunteering, setVolunteering] = useState<VolunteeringInterface>();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  const [category, setCategory] = useState<VolunteeringProps>();

  const [participationLoader, setParticipationLoader] = useState<boolean>(false);
  const [participates, setParticipates] = useState<boolean>(false);
  const [status, setStatus] = useState<"pending" | "confirmed" | "rejected">();

  async function getVolunteeringData() {
    try {
      setLoading(true);
      let response = await getVolunteering(id!);
      const { volunteering } = response.data;

      setCategory(
        volunteeringList.find((item: VolunteeringProps) => item.category === volunteering.category)
      );
      setVolunteering(volunteering);
      if (user?.role === "Voluntário") {
        getParticipation();
      }
    } catch (error: any) {
      setMessage("Não foi possível exibir os dados do projeto. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  async function getParticipation() {
    try {
      let { data } = await alreadyParticipates(id!);
      setParticipates(data.participates);
      setStatus(data.status);
    } catch (error: any) {
      setMessage("Não foi possível exibir os dados do projeto. Tente novamente.");
    }
  }

  async function handleParticipation() {
    if (user?.role === "Visitante") {
      alert("Você precisa estar logado para participar!");
      return;
    }

    try {
      setParticipationLoader(true);
      if (id) {
        const payload = { volunteering: id };
        await participate(payload);
        setParticipates(true);
      }
    } catch (error: any) {
      alert(
        "Não foi possível realizar a solicitação de participação no voluntariado. Tente novamente."
      );
    } finally {
      setParticipationLoader(false);
    }
  }

  useEffect(() => {
    getVolunteeringData();
  }, [id]);

  return (
    <>
      {loading ? (
        <Screen>
          <Loader />
        </Screen>
      ) : message ? (
        <Paper>
          <Message message={message} error={true} />
        </Paper>
      ) : (
        <>
          <CustomPaper>
            <Header color={category?.color || theme.colors.PRIMARY_DARK}>
              <Icon as={category?.icon || MoreHorizontal} />
            </Header>
            <InformationsArea>
              <TitleArea>
                <Title>{volunteering?.category}</Title>
                <Text>
                  Projeto{" "}
                  <Link to={`/projeto/${volunteering?.project._id}`}>
                    {volunteering?.project.title}
                  </Link>
                </Text>
              </TitleArea>
              <Divider />
              <Text>{volunteering?.description}</Text>
              <Divider />
              <ButtonsArea>
                <ContactButton
                  target="_blank"
                  href={`https://wa.me/55${volunteering?.whatsapp}?text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20da%20aplica%C3%A7%C3%A3o%20Voluntech%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20oportunidades%20de%20voluntariado.`}
                >
                  <FaWhatsapp />
                  Dúvidas
                </ContactButton>
                {user?.role != "Organização" && (
                  <Button
                    as="button"
                    onClick={handleParticipation}
                    participates={participates}
                    disabled={participates}
                  >
                    {participationLoader ? (
                      <Loader color={theme.colors.LIGHT} />
                    ) : participates ? (
                      status === "confirmed" ? (
                        <>
                          <Check />
                          Solicitação aprovada
                        </>
                      ) : status === "rejected" ? (
                        <>
                          <X />
                          Solicitação recusada
                        </>
                      ) : (
                        "Solicitação realizada"
                      )
                    ) : (
                      "Quero participar"
                    )}
                  </Button>
                )}
              </ButtonsArea>
            </InformationsArea>
          </CustomPaper>
        </>
      )}
    </>
  );
}

export default VolunteeringDetails;
