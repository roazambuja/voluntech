import { Strong } from "../../styles/global";
import { Label, Textarea, TextareaArea } from "./styles";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

function TextArea({ label, ...props }: TextAreaProps): JSX.Element {
  return (
    <TextareaArea>
      <Label htmlFor={props.id}>
        {label} {props.required && <Strong>*</Strong>}
      </Label>
      <Textarea {...props} />
    </TextareaArea>
  );
}

export { TextArea };
