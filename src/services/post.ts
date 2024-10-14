import api from "./api";
import { ProjectInterface } from "./project";

export interface PostInterface {
  _id?: string;
  text: string;
  project: ProjectInterface;
  pictures?: {
    filePath: string;
    publicId: string;
  }[];
}

export const createPost = async (body: FormData) => {
  try {
    return api.post("/post", body);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
