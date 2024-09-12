import api from "./api";
import { OrganizationInterface } from "./users";

export enum PixKeyType {
  Email = "email",
  Phone = "phone",
  CPF = "cpf",
  CNPJ = "cnpj",
  Random = "random",
}

export interface PixInterface {
  _id?: string;
  type: "email" | "phone" | "cpf" | "cnpj" | "random";
  name: string;
  key: string;
  bank: string;
  organization?: OrganizationInterface;
}

export const createPixKey = async (payload: PixInterface) => {
  try {
    return api.post("/pix", payload);
  } catch {
    throw new Error("Serviço não disponível");
  }
};

export const getPixByUser = async (userId: string) => {
  try {
    return api.get(`/pix/user/${userId}`);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
