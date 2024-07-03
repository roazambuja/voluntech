import { Strong } from "../../styles/global";
import { InputArea, Label, OptionsArea, Radio, RadioArea, Title } from "./styles";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  options: string[];
  name: string;
}

function RadioInput({ title, options, name, ...props }: RadioProps): JSX.Element {
  return (
    <RadioArea>
      <Title>
        {title} {props.required && <Strong>*</Strong>}
      </Title>
      <OptionsArea>
        {options.map((option, index) => {
          return (
            <InputArea key={index}>
              <Radio type="radio" id={option} name={name} value={option} {...props} />
              <Label htmlFor={option}>{option}</Label>
            </InputArea>
          );
        })}
      </OptionsArea>
    </RadioArea>
  );
}

export { RadioInput };
