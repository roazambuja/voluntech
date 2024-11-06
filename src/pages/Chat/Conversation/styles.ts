import styled from "styled-components";
import { Title as GlobalTitle, Text as GlobalText } from "../../../styles/global";
import { ArrowLeft } from "react-feather";

const ChatContainer = styled.div<{ hide: boolean }>`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
  max-height: 100%;
  border-left: 1px solid ${(props) => props.theme.colors.LIGHT_GREY};

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    display: ${(props) => (props.hide ? "none" : "flex")};
    width: 100%;
  }
`;

const ChatHeader = styled.div`
  background-color: ${(props) => props.theme.colors.PRIMARY};
  color: ${(props) => props.theme.colors.WHITE};
  padding: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
`;

const StyledIcon = styled(ArrowLeft)`
  display: none;

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    display: block;
    width: 30px;
    height: 30px;
    color: ${(props) => props.theme.colors.WHITE};
  }
`;

const Title = styled(GlobalTitle)`
  color: ${(props) => props.theme.colors.WHITE};
`;

const Text = styled(GlobalText)`
  color: ${(props) => props.theme.colors.WHITE};
`;

const MessageArea = styled.div`
  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 24px;
    background: ${(props) => props.theme.colors.PRIMARY_LIGHT};
  }

  &::-webkit-scrollbar-track {
    border-radius: 24px;
    background-color: ${(props) => props.theme.colors.LIGHT};
  }

  box-sizing: border-box;
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.LIGHT};
`;

const Message = styled.div<{ sent: boolean }>`
  display: flex;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 12px;
  max-width: 60%;
  margin-bottom: 12px;
  background-color: ${({ sent }) =>
    sent
      ? (props) => props.theme.colors.PRIMARY_LIGHT
      : (props) => props.theme.colors.PRIMARY_DARK};
  color: ${(props) => props.theme.colors.WHITE};
  align-self: ${({ sent }) => (sent ? "flex-end" : "flex-start")};
  border-radius: ${(props) => (props.sent ? "16px 16px 0 16px" : "16px 16px 16px 0")};
`;

const MessageInputContainer = styled.form`
  display: flex;
  gap: 8px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.WHITE};
  border-top: 1px solid ${(props) => props.theme.colors.GREY};
`;

const MessageInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.GREY};
  border-radius: 16px;
  outline: none;
`;

const SendButton = styled.button`
  background-color: ${(props) => props.theme.colors.PRIMARY};
  color: ${(props) => props.theme.colors.WHITE};
  border: none;
  padding: 10px 16px;
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.PRIMARY_DARK};
  }
`;

export {
  ChatContainer,
  ChatHeader,
  StyledIcon,
  Title,
  Text,
  MessageArea,
  Message,
  MessageInput,
  MessageInputContainer,
  SendButton,
};
