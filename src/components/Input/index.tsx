import { Strong } from "../../styles/global";
import { InputField } from "./InputField";
import { Label } from "./Label";
import { InputArea } from "./styles";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
}

function Input({ label, ...props }: InputProps): JSX.Element {
  return (
    <InputArea>
      <Label htmlFor={props.id} type={props.type}>
        {label} {props.required && <Strong>*</Strong>}
      </Label>
      <InputField {...props} />
    </InputArea>
  );
}

export { Input };
