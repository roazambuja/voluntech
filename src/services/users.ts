import api from "./api";

interface UserInterface {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: ["Voluntário" | "Organização"];
}

interface OrganizationInterface extends UserInterface {
  cause: string;
  description: string;
}

export const postUser = async (body: FormData) => {
  try {
    return api.post("/users", body);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
