import api from "./api";
import { OrganizationInterface } from "./users";

export interface ProjectInterface {
  _id?: string;
  title: string;
  description: string;
  organization: OrganizationInterface;
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

export const getUserProjects = async (userId: string) => {
  try {
    return api.get(`/projects/user/${userId}`);
  } catch {
    throw new Error("Serviço não disponível");
  }
};

export const getProjectById = async (id: string) => {
  try {
    return api.get(`/projects/${id}`);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
