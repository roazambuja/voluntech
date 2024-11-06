import { HTMLInputTypeAttribute } from "react";
import { Label as StyledLabel } from "./styles";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  type: HTMLInputTypeAttribute | undefined;
  width?: string;
}

function Label({ type, width, ...props }: LabelProps): JSX.Element {
  return <StyledLabel {...props} type={type} width={width} />;
}

export { Label };
