import { TitleArea } from "../../pages/SignUp/styles";
import { Text, Title } from "../../styles/global";
import { Button } from "../Button";
import { CheckIcon, ErrorIcon } from "./styles";
import { useNavigate } from "react-router-dom";

export interface MessageProps {
  message: string;
  error: boolean;
  buttonText?: string;
  click?: () => void;
}

function Message({ message, error, buttonText, click }: MessageProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <TitleArea>
        <Title> {error ? <ErrorIcon /> : <CheckIcon />}</Title>
        <Text>{message}</Text>
      </TitleArea>
      {buttonText && !error ? (
        <Button type="button" onClick={click}>
          {buttonText}
        </Button>
      ) : (
        <Button type="button" onClick={() => navigate(-1)}>
          Voltar
        </Button>
      )}
    </>
  );
}

export { Message };
