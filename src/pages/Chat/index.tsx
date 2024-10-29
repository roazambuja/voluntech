import { useAuth } from "../../contexts/AuthContext";
import {
  ChatContainer,
  ChatHeader,
  Message,
  MessageArea,
  MessageInput,
  MessageInputContainer,
  Paper,
  SendButton,
  Text,
  Title,
} from "./styles";
import { Message as ErrorMessage } from "../../components/Message";

function Chat(): JSX.Element {
  const { user } = useAuth();
  const isVolunteer = user?.role === "Visitante";

  const messages = [
    { id: 1, text: "Olá!", from: "randomId" },
    {
      id: 2,
      text: "Preciso de ajuda com uma tarefa muito longa do meu trabalho.",
      from: !isVolunteer && user?._id,
    },
    { id: 3, text: "Claro! Me diga mais detalhes.", from: "randomId" },
  ];

  return (
    <Paper>
      {isVolunteer ? (
        <ErrorMessage error={true} message="Você não possui permissão para acessar essa página." />
      ) : (
        <ChatContainer>
          <ChatHeader>
            <Title>Fulano de Tal</Title>
            <Text>Voluntário</Text>
          </ChatHeader>
          <MessageArea>
            {messages.map((msg) => (
              <Message key={msg.id} sent={msg.from === user?._id}>
                {msg.text}
              </Message>
            ))}
          </MessageArea>
          <MessageInputContainer>
            <MessageInput placeholder="Escreva uma mensagem" />
            <SendButton>Enviar</SendButton>
          </MessageInputContainer>
        </ChatContainer>
      )}
    </Paper>
  );
}

export default Chat;
