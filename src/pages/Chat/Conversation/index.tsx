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
  StyledIcon,
} from "./styles";
import { useEffect, useRef, useState } from "react";
import { getUser, OrganizationInterface, UserInterface } from "../../../services/users";
import { getMessages, MessageInterface, sendMessage } from "../../../services/message";
import { Loader } from "../../../components/Loader";
import { Text as GlobalText } from "../../../styles/global";
import { io, Socket } from "socket.io-client";
import { TextArea } from "../../Organizations/Configurations/styles";

export interface ConversationProps {
  loggedUser: UserInterface | OrganizationInterface;
  to: string | undefined;
  hide: boolean;
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
}

function Conversation({ loggedUser, to, hide, setHide }: ConversationProps): JSX.Element {
  const [targetUser, setTargetUser] = useState<UserInterface | OrganizationInterface>();
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [messages, setMessages] = useState<MessageInterface[]>([]);

  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    if (to) {
      setHide(false);
      setErrorMessage(undefined);
      getUserData(to);
    } else {
      setHide(true);
      setErrorMessage("Selecione uma conversa para continuar.");
    }

    socket.current = io(process.env.REACT_APP_API_URL);

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, [to]);

  useEffect(() => {
    if (targetUser) {
      const roomName = [loggedUser._id, targetUser._id].sort().join("-");
      if (socket.current) {
        socket.current.emit("joinRoom", roomName);

        socket.current.on("newMessage", (newMessage) => {
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        return () => {
          socket.current && socket.current.off("newMessage");
        };
      }
    }
  }, [targetUser]);

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

  async function send(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (targetUser && socket.current) {
      const payload = { from: loggedUser, to: targetUser, content: message };
      if (message.trim()) {
        const roomName = [loggedUser._id, targetUser._id].sort().join("-");
        console.log(roomName);
        socket.current.emit("sendMessage", payload, roomName);
        await sendMessage(payload);
        setMessage("");
      }
    }
  }

  return (
    <ChatContainer hide={hide}>
      <ChatHeader>
        <StyledIcon onClick={() => setHide(true)} />
        <TextArea>
          <Title>{targetUser?.name}</Title>
          <Text>{targetUser?.role}</Text>
        </TextArea>
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
              <Message key={msg._id} sent={msg.from._id === loggedUser._id}>
                {msg.content}
              </Message>
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
