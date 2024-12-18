import api from "./api";
import { ProjectInterface } from "./project";
import { OrganizationInterface, UserInterface } from "./users";

export interface PostInterface {
  _id?: string;
  text: string;
  project: ProjectInterface;
  user: UserInterface | OrganizationInterface;
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

export const getUserPosts = async (userId: string, page: number, limit: number) => {
  try {
    return api.get(`/post/user/${userId}?page=${page}&limit=${limit}`);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
