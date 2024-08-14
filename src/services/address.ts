import api from "./api";

export interface AddressInterface {
  id: string;
  city: string;
  state: string;
}

export const getUserAddress = async (userId: string) => {
  try {
    return api.get(`/address/user/${userId}`);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
