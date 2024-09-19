import { useState } from "react";
import { Input } from "../../../components/Input";
import { Form, Paper, Title } from "../../../styles/global";
import { TextArea } from "../../../components/TextArea";
import { Button } from "../../../components/Button";
import { Loader } from "../../../components/Loader";
import { Message } from "../../../components/Message";
import { useAuth } from "../../../contexts/AuthContext";

function CreateVolunteering(): JSX.Element {
  const { user } = useAuth();

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Paper>
      {loading ? (
        <Loader />
      ) : user?.role === "Organização" ? (
        !message ? (
          <>
            <Title>Trabalho Voluntário</Title>
            <Form onSubmit={handleSubmit}>
              <Button type="submit">Cadastrar</Button>
            </Form>
          </>
        ) : (
          <Message error={error} message={message} buttonText="Visualizar projeto" />
        )
      ) : (
        <Message error={true} message="Você não possui permissão para acessar essa página." />
      )}
    </Paper>
  );
}

export default CreateVolunteering;
