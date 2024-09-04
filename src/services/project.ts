import api from "./api";

export interface ProjectInterface {
  id?: string;
  title: string;
  description: string;
  headerPicture?: {
    filePath: string;
    publicId: string;
  };
}

export const createProject = async (payload: FormData) => {
  try {
    return api.post("/projects", payload);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
