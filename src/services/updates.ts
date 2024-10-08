import api from "./api";
import { ProjectInterface } from "./project";
import { VolunteeringInterface } from "./volunteering";

export interface ProjectUpdate extends ProjectInterface {
  type: "project";
}

export interface VolunteeringUpdate extends VolunteeringInterface {
  type: "volunteering";
}

export type UpdatesInterface = ProjectUpdate | VolunteeringUpdate;

export const getFollowedUpdates = async (page: number, limit: number) => {
  try {
    return await api.get(`/updates?page=${page}&limit=${limit}`);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
