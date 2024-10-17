import api from "./api";
import { PostInterface } from "./post";
import { ProjectInterface } from "./project";
import { VolunteeringInterface } from "./volunteering";

export interface ProjectUpdate extends ProjectInterface {
  type: "project";
}

export interface VolunteeringUpdate extends VolunteeringInterface {
  type: "volunteering";
}
export interface PostUpdate extends PostInterface {
  type: "post";
}

export type UpdatesInterface = ProjectUpdate | VolunteeringUpdate | PostUpdate;

export const getFollowedUpdates = async (page: number, limit: number) => {
  try {
    return await api.get(`/updates?page=${page}&limit=${limit}`);
  } catch {
    throw new Error("Serviço não disponível");
  }
};

export const getProjectUpdates = async (projectId: string, page: number, limit: number) => {
  try {
    return await api.get(`/updates/project/${projectId}?page=${page}&limit=${limit}`);
  } catch {
    throw new Error("Serviço não disponível");
  }
};

export const getOrganizationUpdates = async (
  organizationId: string,
  page: number,
  limit: number
) => {
  try {
    return await api.get(`/updates/organization/${organizationId}?page=${page}&limit=${limit}`);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
