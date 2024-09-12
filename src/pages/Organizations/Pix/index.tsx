import { useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Form, Paper, Title } from "../../../styles/global";
import { RadioInput } from "../../../components/RadioInput";
import { createPixKey, PixInterface, PixKeyType } from "../../../services/pix";
import { Loader } from "../../../components/Loader";
import { Message } from "../../../components/Message";

export const keyTypeLabels: { [key in PixKeyType]: string } = {
  [PixKeyType.Email]: "E-mail",
  [PixKeyType.CPF]: "CPF",
  [PixKeyType.CNPJ]: "CNPJ",
  [PixKeyType.Phone]: "Telefone",
  [PixKeyType.Random]: "Chave aleatória",
};

function Pix(): JSX.Element {
  const [keyType, setKeyType] = useState<PixKeyType>();
  const [key, setKey] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [bank, setBank] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();


  const handleKeyTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.id as PixKeyType;
    const mappedValue = (Object.keys(keyTypeLabels) as PixKeyType[]).find(
      (type) => keyTypeLabels[type] === value
    );

    if (mappedValue) {
      setKeyType(mappedValue);
    } else {
      console.error("Tipo de chave inválido");
    }
  };

  const keyTypes = Object.values(keyTypeLabels);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = { type: keyType, key, name, bank };

    try {
      setLoading(true);
      let response = await createPixKey(payload as PixInterface);
      setMessage(response.data.message);
    } catch (error: any) {
      error.response?.data.message
        ? setMessage(error.response.data.message)
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
      ) : !message ? (
        <Form onSubmit={handleSubmit}>
          <Title>Chave PIX</Title>
          <RadioInput
            required
            options={keyTypes}
            title="Tipo de chave"
            name="keyType"
            value={keyType}
            onChange={handleKeyTypeChange}
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
          <Button type="submit">Cadastrar</Button>
        </Form>
      ) : (
        <Message error={error} message={message} />
      )}
    </Paper>
  );
}

export default Pix;
