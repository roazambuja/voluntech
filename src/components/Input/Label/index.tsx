import { HTMLInputTypeAttribute } from "react";
import { Label as StyledLabel } from "./styles";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  type: HTMLInputTypeAttribute | undefined;
}

function Label({ type, ...props }: LabelProps): JSX.Element {
  return <StyledLabel {...props} type={type} />;
}

export { Label };
