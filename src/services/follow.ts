import api from "./api";
import { OrganizationInterface, UserInterface } from "./users";

export interface FollowInterface {
  _id?: string;
  user: UserInterface;
  organization: OrganizationInterface;
}

export const followOrganization = async (payload: FollowInterface) => {
  try {
    return api.post("/follow", payload);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
