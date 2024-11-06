import { Step as StyledStep } from "./styles";

export interface StepProps {
  status: "current" | "completed" | "pending";
}

function Step({ status }: StepProps): JSX.Element {
  return <StyledStep status={status} />;
}

export { Step };
