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
