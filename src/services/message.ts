import api from "./api";
import { OrganizationInterface, UserInterface } from "./users";

export interface MessageInterface {
  _id?: string;
  to: UserInterface | OrganizationInterface;
  from: UserInterface | OrganizationInterface;
  content: string;
}

export const sendMessage = async (payload: MessageInterface) => {
  try {
    return api.post("/message", payload);
  } catch {
    throw new Error("Serviço não disponível");
  }
};

export const getMessages = async (id: string) => {
  try {
    return api.get(`/message/${id}`);
  } catch {
    throw new Error("Serviço não disponível");
  }
};

export const getConversations = async () => {
  try {
    return api.get("/message/user");
  } catch {
    throw new Error("Serviço não disponível");
  }
};
