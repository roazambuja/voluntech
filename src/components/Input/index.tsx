import { Strong } from "../../styles/global";
import { InputField } from "./InputField";
import { InputArea, Label } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, ...props }: InputProps): JSX.Element {
  return (
    <InputArea>
      <Label htmlFor={props.id}>
        {label} {props.required && <Strong>*</Strong>}
      </Label>
      <InputField {...props} />
    </InputArea>
  );
}

export { Input };
