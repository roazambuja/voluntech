import api from "./api";

export interface UserInterface {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: ["Voluntário" | "Organização"];
  profilePicture?: {
    filePath: string;
    publicId: string;
  };
}

export interface OrganizationInterface extends UserInterface {
  cause: string;
  description?: string;
}

export const postUser = async (body: FormData) => {
  try {
    return api.post("/users", body);
  } catch {
    throw new Error("Serviço não disponível");
  }
};

export const getUser = async (id: string) => {
  try {
    return api.get(`/users/${id}`);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
