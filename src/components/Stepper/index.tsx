import { useEffect, useState } from "react";
import { Stepper as StepperContainer } from "./styles";
import { Step, StepProps } from "./Step";

export interface StepperProps {
  steps: number;
  current: number;
}

function Stepper({ steps, current }: StepperProps): JSX.Element {
  const [stepList, setStepList] = useState<StepProps[]>([]);

  function createList() {
    let stepList: StepProps[] = [];
    for (let i = 1; i <= steps; i++) {
      let status: "current" | "completed" | "pending" =
        i < current ? "completed" : i == current ? "current" : "pending";

      let step: StepProps = {
        status,
      };
      stepList.push(step);
    }
    return stepList;
  }

  useEffect(() => {
    setStepList(createList());
  }, [steps, current]);

  return (
    <StepperContainer>
      {stepList.map((item: StepProps, index) => {
        return <Step status={item.status} key={index} />;
      })}
    </StepperContainer>
  );
}

export { Stepper };
