import { keyTypeLabels } from "../pages/Organizations/Pix";
import { PixKeyType } from "../services/pix";

export const handleKeyTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.id as PixKeyType;
  const mappedValue = (Object.keys(keyTypeLabels) as PixKeyType[]).find(
    (type) => keyTypeLabels[type] === value
  );

  if (mappedValue) {
    return mappedValue;
  } else {
    return undefined;
  }
};
