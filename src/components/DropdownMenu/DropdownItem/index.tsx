import { Icon, Item, Link } from "./styles";

interface DropdownItemProps {
  Image: React.ElementType;
  text: string;
  action: () => void;
}

function DropdownItem({ Image, text, action }: DropdownItemProps): JSX.Element {
  return (
    <Item onClick={action}>
      <Icon as={Image} />
      <Link>{text}</Link>
    </Item>
  );
}

export { DropdownItem };
