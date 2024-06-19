import { Button as StyledButton } from "./styles";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | undefined;
  children?: React.ReactNode;
}

function Button({ variant, children, ...props }: ButtonProps): JSX.Element {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}

export { Button };
