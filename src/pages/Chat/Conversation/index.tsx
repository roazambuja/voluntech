import {
  ChatContainer,
  ChatHeader,
  Message,
  MessageArea,
  MessageInput,
  MessageInputContainer,
  SendButton,
  Title,
  Text,
} from "./styles";
import { useEffect, useState } from "react";
import { getUser, OrganizationInterface, UserInterface } from "../../../services/users";

export interface ConversationProps {
  loggedUser: UserInterface | OrganizationInterface;
  to: string | undefined;
}

function Conversation({ loggedUser, to }: ConversationProps): JSX.Element {
  const [targetUser, setTargetUser] = useState<UserInterface | OrganizationInterface>();
  const [message, setMessage] = useState<string>("");

  const [messages, setMessages] = useState([
    { id: 1, text: "Olá!", from: "randomId" },
    {
      id: 2,
      text: "Preciso de ajuda com uma tarefa muito longa do meu trabalho.",
      from: loggedUser._id,
    },
    { id: 3, text: "Claro! Me diga mais detalhes.", from: "randomId" },
  ]);

  async function getUserData(id: string) {
    try {
      // setLoading(true);
      const response = await getUser(id);
      const { data } = response.data;
      setTargetUser(data);
    } catch (error: any) {
      // setErrorMessage("Ocorreu um erro ao buscar as atualizações.");
    } finally {
      // setLoading(false);
    }
  }

  useEffect(() => {
    if (to) {
      getUserData(to);
    }
  });

  function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: Date.now(),
        text: message,
        from: loggedUser._id,
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  }
  return (
    <ChatContainer>
      <ChatHeader>
        <Title>{targetUser?.name}</Title>
        <Text>{targetUser?.role}</Text>
      </ChatHeader>
      <MessageArea>
        {messages
          .slice()
          .reverse()
          .map((msg) => (
            <Message key={msg.id} sent={msg.from === loggedUser._id}>
              {msg.text}
            </Message>
          ))}
      </MessageArea>
      <MessageInputContainer onSubmit={sendMessage}>
        <MessageInput
          placeholder="Escreva uma mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SendButton type="submit">Enviar</SendButton>
      </MessageInputContainer>
    </ChatContainer>
  );
}

export default Conversation;
