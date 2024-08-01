import api from "./api";

export interface AuthInterface {
  email: string;
  password: string;
}

export const login = async (body: AuthInterface) => {
  try {
    return api.post("/login", body);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
