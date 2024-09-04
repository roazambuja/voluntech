import styled from "styled-components";
import { CheckCircle, XCircle } from "react-feather";

const CheckIcon = styled(CheckCircle)`
  color: ${(props) => props.theme.colors.SECONDARY};
  height: 50px;
  margin: 16px;
  width: 50px;
`;

const ErrorIcon = styled(XCircle)`
  color: ${(props) => props.theme.colors.SECONDARY};
  height: 50px;
  margin: 16px;
  width: 50px;
`;

export { CheckIcon, ErrorIcon };
