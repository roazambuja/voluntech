import { Icon, Button as StyledButton } from "./styles";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "rounded" | undefined;
  mode?: "edit" | "create" | undefined;
  children?: React.ReactNode;
  icon?: React.ElementType;
}

function Button({ variant, children, mode, icon, ...props }: ButtonProps): JSX.Element {
  return (
    <StyledButton variant={variant} mode={mode} {...props}>
      {icon && <Icon as={icon} strokeWidth={3} />}
      {children}
    </StyledButton>
  );
}

export { Button };
