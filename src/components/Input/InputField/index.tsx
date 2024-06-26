import { Field } from "./styles";

function InputField({ ...props }: React.InputHTMLAttributes<HTMLInputElement>): JSX.Element {
  return <Field {...props} />;
}

export { InputField };
