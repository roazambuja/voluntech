import api from "./api";
import { UserInterface } from "./users";
import { VolunteeringInterface } from "./volunteering";

export interface ParticipationInterface {
  _id?: string;
  user?: UserInterface;
  volunteering: VolunteeringInterface | string;
  status?: "pending" | "confirmed" | "rejected";
}

export const participate = async (payload: ParticipationInterface) => {
  try {
    return api.post("/participation", payload);
  } catch {
    throw new Error("Serviço não disponível");
  }
};

export const alreadyParticipates = async (volunteering: string) => {
  try {
    return api.get(`/participation/${volunteering}`);
  } catch {
    throw new Error("Serviço não disponível");
  }
};

export const getNotifications = async () => {
  try {
    return api.get("/participation");
  } catch {
    throw new Error("Serviço não disponível");
  }
};

export const answerParticipation = async (
  id: string,
  payload?: { status: "pending" | "confirmed" | "rejected" }
) => {
  try {
    return api.put(`/participation/${id}`, payload);
  } catch {
    throw new Error("Serviço não disponível");
  }
};

export const projectParticipation = async (id: string) => {
  try {
    return api.get(`/participation/project/${id}`);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
