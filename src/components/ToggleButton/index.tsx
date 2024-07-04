import { BaseSyntheticEvent, useState } from "react";
import { Option } from "./Option";
import { ButtonArea } from "./styles";

export interface ToggleButtonProps {
  firstTitle: string;
  secondTitle: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

function ToggleButton({ firstTitle, secondTitle, setSelected }: ToggleButtonProps): JSX.Element {
  const [options, setOptions] = useState([
    {
      title: firstTitle,
      selected: true,
    },
    {
      title: secondTitle,
      selected: false,
    },
  ]);

  function select(e: BaseSyntheticEvent) {
    e.preventDefault();
    let id = e.target.id;

    if (!options[id].selected) {
      setSelected(options[id].title);
      let newOptions = options;
      newOptions[id].selected = true;

      id == 1 ? (newOptions[0].selected = false) : (newOptions[1].selected = false);

      setOptions(newOptions);
    }
  }

  return (
    <ButtonArea>
      {options.map((option, index) => {
        return (
          <Option
            id={index.toString()}
            key={index}
            selected={option.selected}
            onClick={(e) => select(e)}
          >
            {option.title}
          </Option>
        );
      })}
    </ButtonArea>
  );
}

export { ToggleButton };
