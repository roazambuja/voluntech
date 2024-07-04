import styled from "styled-components";
import { StepProps } from ".";

const Step = styled.div<StepProps>`
  width: 100%;
  background-color: ${(props) =>
    props.status === "current"
      ? props.theme.colors.PRIMARY_LIGHT
      : props.status === "completed"
      ? props.theme.colors.PRIMARY
      : props.theme.colors.GREY};
`;

export { Step };
