import { Option as StyledOption } from "./styles";

export interface OptionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  selected: boolean;
}

function Option({ selected, children, ...props }: OptionProps): JSX.Element {
  return (
    <StyledOption selected={selected} {...props}>
      {children}
    </StyledOption>
  );
}

export { Option };
