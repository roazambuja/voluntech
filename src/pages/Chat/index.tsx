import { useAuth } from "../../contexts/AuthContext";
import { Paper } from "./styles";
import { Paper as GlobalPaper } from "../../styles/global";
import { Message as ErrorMessage } from "../../components/Message";
import Conversation from "./Conversation";
import { useParams } from "react-router-dom";
import ChatList from "./ChatList";
import { useEffect, useState } from "react";

function Chat(): JSX.Element {
  const { user } = useAuth();
  const isVolunteer = user?.role === "Visitante";
  const { id } = useParams();
  const [selectedChat, setSelectedChat] = useState<string>("");

  useEffect(() => {
    if (id) setSelectedChat(id);
  }, []);

  return isVolunteer ? (
    <GlobalPaper>
      <ErrorMessage error={true} message="Você não possui permissão para acessar essa página." />
    </GlobalPaper>
  ) : (
    <Paper>
      {user && (
        <>
          <ChatList setSelectedChat={setSelectedChat} />
          <Conversation loggedUser={user} to={selectedChat} />
        </>
      )}
    </Paper>
  );
}

export default Chat;