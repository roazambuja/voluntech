import { useAuth } from "../../contexts/AuthContext";
import { Paper } from "./styles";
import { Paper as GlobalPaper } from "../../styles/global";
import { Message as ErrorMessage } from "../../components/Message";
import Conversation from "./Conversation";
import { useParams } from "react-router-dom";

function Chat(): JSX.Element {
  const { user } = useAuth();
  const isVolunteer = user?.role === "Visitante";
  const { id } = useParams();

  return isVolunteer ? (
    <GlobalPaper>
      <ErrorMessage error={true} message="Você não possui permissão para acessar essa página." />
    </GlobalPaper>
  ) : (
    <Paper>{user && <Conversation loggedUser={user} to={id} />}</Paper>
  );
}

export default Chat;
