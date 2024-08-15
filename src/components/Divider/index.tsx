import { Container, Line, Text } from "./styles";

interface DividerProps {
  text?: string;
}

function Divider({ text }: DividerProps): JSX.Element {
  return (
    <Container>
      <Line></Line>
      {text && <Text>{text}</Text>}
      <Line></Line>
    </Container>
  );
}

export { Divider };
