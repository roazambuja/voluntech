import api from "./api";
import { OrganizationInterface } from "./users";

export interface SocialMediaInterface {
  _id?: string;
  whatsapp?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  organization?: OrganizationInterface;
}

export const createSocialMedia = async (payload: SocialMediaInterface) => {
  try {
    return api.post("/social-media", payload);
  } catch {
    throw new Error("Serviço não disponível");
  }
};

export const getSocialMediaByUser = async (userId: string) => {
  try {
    return api.get(`/social-media/user/${userId}`);
  } catch {
    throw new Error("Serviço não disponível");
  }
};

export const getSocialMediaById = async (id: string) => {
  try {
    return api.get(`/social-media/${id}`);
  } catch {
    throw new Error("Serviço não disponível");
  }
};

export const updateSocialMedia = async (id: string, payload: SocialMediaInterface) => {
  try {
    return api.put(`/social-media/${id}`, payload);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
