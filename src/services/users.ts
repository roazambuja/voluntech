import api from "./api";

export enum UNDevelopmentGoals {
  "Erradicação da Pobreza",
  "Fome Zero e Agricultura Sustentável",
  "Saúde e Bem-Estar",
  "Educação de Qualidade",
  "Igualdade de Gênero",
  "Água Potável e Saneamento",
  "Energia Limpa e Acessível",
  "Trabalho Decente e Crescimento Econômico",
  "Indústria, Inovação e Infraestrutura",
  "Redução das Desigualdades",
  "Cidades e Comunidades Sustentáveis",
  "Consumo e Produção Responsáveis",
  "Ação Contra a Mudança Global do Clima",
  "Vida na Água",
  "Vida Terrestre",
  "Paz, Justiça e Instituições Eficazes",
  "Parcerias e Meios de Implementação",
}

export interface UserInterface {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: "Voluntário" | "Organização";
  profilePicture?: {
    filePath: string;
    publicId: string;
  };
}

export interface OrganizationInterface extends UserInterface {
  cause: string;
  description?: string;
  developmentGoals?: UNDevelopmentGoals[];
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

export const getLoggedUser = async () => {
  try {
    return api.get("/users");
  } catch {
    throw new Error("Serviço não disponível");
  }
};
