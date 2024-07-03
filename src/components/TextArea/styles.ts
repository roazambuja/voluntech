import styled from "styled-components";
import { Label as GlobalLabel } from "../../styles/global";
import { InputArea } from "../Input/styles";

const TextareaArea = styled(InputArea)``;

const Label = styled(GlobalLabel)``;

const Textarea = styled.textarea`
  border: 1px solid ${(props) => props.theme.colors.GREY};
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  padding: 8px;
  resize: none;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.PRIMARY_DARK};
    outline: none;
  }
`;

export { TextareaArea, Label, Textarea };
