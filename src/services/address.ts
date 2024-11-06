import api from "./api";
import { OrganizationInterface, UserInterface } from "./users";

export interface AddressInterface {
  id: string;
  city: string;
  state: string;
  user: UserInterface | OrganizationInterface;
}

export const getUserAddress = async (userId: string) => {
  try {
    return api.get(`/address/user/${userId}`);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
