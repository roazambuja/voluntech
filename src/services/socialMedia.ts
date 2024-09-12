import api from "./api";
import { OrganizationInterface } from "./users";

export interface SocialMediaInterface {
  _id?: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  tiktok: string;
  organization?: OrganizationInterface;
}

export const createSocialMedia = async (payload: SocialMediaInterface) => {
  try {
    return api.post("/social-media", payload);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
