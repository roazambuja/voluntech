import { AddressInterface } from "./address";
import api from "./api";
import { ProjectInterface } from "./project";
import { OrganizationInterface, UserInterface as DefaultUserInterface } from "./users";
import { VolunteeringInterface } from "./volunteering";

export interface UserInterface extends DefaultUserInterface {
  address: {
    city: string;
    state: string;
  };
}

export interface SearchInterface {
  users: (OrganizationInterface | UserInterface)[];
  projects: ProjectInterface[];
  volunteerings: VolunteeringInterface[];
  addresses: AddressInterface[];
}

export const searchAll = async (query: string) => {
  try {
    return api.get(`/search?query=${query}`);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
