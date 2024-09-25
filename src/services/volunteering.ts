import api from "./api";
import { ProjectInterface } from "./project";

export interface VolunteeringInterface {
  _id?: string;
  category: string;
  description: string;
  whatsapp: string;
  project: ProjectInterface;
}

export const createVolunteering = async (payload: VolunteeringInterface) => {
  try {
    return api.post("/volunteering", payload);
  } catch {
    throw new Error("Serviço não disponível");
  }
};

export const getProjectVolunteering = async (id: string) => {
  try {
    return api.get(`/volunteering/project/${id}`);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
