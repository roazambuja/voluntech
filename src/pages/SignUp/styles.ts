import styled from "styled-components";
import { CheckCircle, XCircle } from "react-feather";

const TitleArea = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
`;

const ButtonArea = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
`;

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

export { TitleArea, ButtonArea, CheckIcon, ErrorIcon };
