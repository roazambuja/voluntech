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
import { getMessages, MessageInterface, sendMessage } from "../../../services/message";
import { Loader } from "../../../components/Loader";
import { Text as GlobalText } from "../../../styles/global";

export interface ConversationProps {
  loggedUser: UserInterface | OrganizationInterface;
  to: string | undefined;
}

function Conversation({ loggedUser, to }: ConversationProps): JSX.Element {
  const [targetUser, setTargetUser] = useState<UserInterface | OrganizationInterface>();
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [messages, setMessages] = useState<MessageInterface[]>([]);

  async function getUserData(id: string) {
    try {
      setLoading(true);
      const response = await getUser(id);
      const { data } = response.data;
      setTargetUser(data);
      getUserMessages(id);
    } catch (error: any) {
      setErrorMessage("Ocorreu um erro ao buscar as informações do chat.");
    } finally {
      setLoading(false);
    }
  }

  async function getUserMessages(id: string) {
    try {
      const response = await getMessages(id);
      const { data } = response.data;
      setMessages(data);
    } catch (error: any) {
      setErrorMessage("Ocorreu um erro ao buscar as mensagens.");
    }
  }

  useEffect(() => {
    if (to) {
      getUserData(to);
    } else {
      setErrorMessage("Selecione uma conversa para continuar.");
    }
  }, []);

  async function send(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (targetUser) {
      const payload = { from: loggedUser, to: targetUser, content: message };
      try {
        if (message.trim()) {
          let response = await sendMessage(payload);
          setMessages([...messages, response.data.data]);
        }
      } catch (error) {
        console.log("errrro");
      } finally {
        setMessage("");
      }
    }
  }

  return (
    <ChatContainer>
      <ChatHeader>
        <Title>{targetUser?.name}</Title>
        <Text>{targetUser?.role}</Text>
      </ChatHeader>
      <MessageArea>
        {loading ? (
          <Loader />
        ) : errorMessage ? (
          <GlobalText>{errorMessage}</GlobalText>
        ) : (
          messages
            .slice()
            .reverse()
            .map((msg) => (
              <>
                <Message key={msg._id} sent={msg.from._id === loggedUser._id}>
                  {msg.content}
                </Message>
              </>
            ))
        )}
      </MessageArea>
      <MessageInputContainer onSubmit={send}>
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
