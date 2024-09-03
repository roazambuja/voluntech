import { Strong } from "../../styles/global";
import { InputField } from "./InputField";
import { Label } from "./Label";
import { InputArea, UploadIcon } from "./styles";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
}

function Input({ label, ...props }: InputProps): JSX.Element {
  return (
    <InputArea>
      <Label htmlFor={props.id} type={props.type}>
        {props.type === "file" && <UploadIcon />}
        {label} {props.required && <Strong>*</Strong>}
      </Label>
      <InputField {...props} />
    </InputArea>
  );
}

export { Input };
