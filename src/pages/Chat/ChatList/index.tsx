import { useEffect, useState } from "react";
import { OrganizationInterface, UserInterface } from "../../../services/users";
import { getConversations } from "../../../services/message";
import { Text as GlobalText } from "../../../styles/global";
import { List, ListContainer } from "./styles";
import { ChatHeader, Text, Title } from "../Conversation/styles";
import { TextArea } from "../../Organizations/Configurations/styles";
import { ListItem } from "../../Home/SearchResults/styles";
import { Picture } from "../../../components/Picture";
import { Loader } from "../../../components/Loader";

export interface ChatListProps {
  setSelectedChat: React.Dispatch<React.SetStateAction<string>>;
  hide: boolean;
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChatList({ setSelectedChat, hide, setHide }: ChatListProps): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<(UserInterface | OrganizationInterface)[]>([]);

  useEffect(() => {
    getConversationList();
  }, []);

  async function getConversationList() {
    try {
      setLoading(true);
      const response = await getConversations();
      const { data } = response.data;
      setMessages(data);
    } catch (error: any) {
      console.log("Não foi possível buscar a lista de conversas.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <ListContainer hide={!hide}>
      <ChatHeader>
        <TextArea>
          <Title>Conversas</Title>
          <Text>Conversas iniciadas</Text>
        </TextArea>
      </ChatHeader>
      <List>
        {loading ? (
          <Loader />
        ) : (
          messages.map((user) => {
            return (
              <ListItem
                onClick={() => {
                  user._id && setSelectedChat(user._id);
                  setHide(false);
                }}
              >
                <Picture
                  variant="mini"
                  src={
                    user?.profilePicture
                      ? `${process.env.REACT_APP_CLOUDINARY_URL}${user.profilePicture.publicId}`
                      : undefined
                  }
                />
                <TextArea>
                  <GlobalText>{user.name}</GlobalText>
                  <GlobalText>{user.role}</GlobalText>
                </TextArea>
              </ListItem>
            );
          })
        )}
      </List>
    </ListContainer>
  );
}

export default ChatList;
