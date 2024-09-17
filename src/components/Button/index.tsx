import { Button as StyledButton } from "./styles";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "rounded" | undefined;
  mode?: "edit" | "create" | undefined;
  children?: React.ReactNode;
}

function Button({ variant, children, mode, ...props }: ButtonProps): JSX.Element {
  return (
    <StyledButton variant={variant} mode={mode} {...props}>
      {children}
    </StyledButton>
  );
}

export { Button };
