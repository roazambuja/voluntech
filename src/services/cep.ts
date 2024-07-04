import axios from "axios";

export interface ViacepProps {
  cep: string;
  logradouro: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro: boolean;
}

export async function getCep(cep: string) {
  try {
    let { data } = await axios.get<ViacepProps>(`http://viacep.com.br/ws/${cep}/json`);
    return data;
  } catch {
    throw new Error();
  }
}
