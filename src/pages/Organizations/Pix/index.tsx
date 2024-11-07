import { useEffect, useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Form, Paper, Title } from "../../../styles/global";
import { RadioInput } from "../../../components/RadioInput";
import {
  createPixKey,
  getPixById,
  PixInterface,
  PixKeyType,
  updatePix,
} from "../../../services/pix";
import { Loader } from "../../../components/Loader";
import { Message } from "../../../components/Message";
import { handleKeyTypeChange } from "../../../utils/handleKeyTypeChange";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

export const keyTypeLabels: { [key in PixKeyType]: string } = {
  [PixKeyType.Email]: "E-mail",
  [PixKeyType.CPF]: "CPF",
  [PixKeyType.CNPJ]: "CNPJ",
  [PixKeyType.Phone]: "Telefone",
  [PixKeyType.Random]: "Chave aleatória",
};

function Pix(): JSX.Element {
  const { user } = useAuth();
  const [keyType, setKeyType] = useState<PixKeyType>();
  const [key, setKey] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [bank, setBank] = useState<string>("");

  const [owner, setOwner] = useState<string>();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  const { id } = useParams();

  const keyTypes = Object.values(keyTypeLabels);

  async function getPix() {
    try {
      setLoading(true);
      let { data } = await getPixById(id!);
      if (data.pix) {
        const pix: PixInterface = data.pix;

        setKeyType(pix.type as PixKeyType);
        setName(pix.name);
        setKey(pix.key);
        setBank(pix.bank);
        setOwner(pix.user?._id);
      }
    } catch {
      setError(true);
      setMessage("Não foi possível buscar a sua chave PIX. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      getPix();
    }
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = { type: keyType, key, name, bank };

    let response;
    try {
      setLoading(true);
      if (id) {
        response = await updatePix(id, payload as PixInterface);
      } else {
        response = await createPixKey(payload as PixInterface);
      }
      setMessage(response.data.message);
    } catch (error: any) {
      error.response?.data.message
        ? setMessage(error.response.data.message)
        : id
        ? setMessage("Ocorreu um erro ao editar sua chave PIX. Tente novamente.")
        : setMessage("Ocorreu um erro ao cadastrar sua chave PIX. Tente novamente");
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Paper>
      {loading ? (
        <Loader />
      ) : user?.role === "Voluntário" ||
        user?.role === "Visitante" ||
        (owner && user?._id !== owner) ? (
        <>
          <Message error={true} message="Você não possui permissão para acessar essa página." />
        </>
      ) : !message ? (
        <Form onSubmit={handleSubmit}>
          <Title>Chave PIX</Title>
          <RadioInput
            required
            options={keyTypes}
            title="Tipo de chave"
            name="keyType"
            value={keyTypeLabels[keyType!]}
            onChange={(e) => setKeyType(handleKeyTypeChange(e))}
          />
          <Input
            required
            label="Chave"
            id="key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
          <Input
            required
            label="Nome"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            required
            label="Banco"
            id="bank"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
          />
          <Button type="submit">{id ? "Editar" : "Cadastrar"}</Button>
        </Form>
      ) : (
        <Message error={error} message={message} />
      )}
    </Paper>
  );
}

export default Pix;
