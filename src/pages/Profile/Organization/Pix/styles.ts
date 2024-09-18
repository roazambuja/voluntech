import { Copy } from "react-feather";
import styled from "styled-components";
import { Text } from "../../../../styles/global";

const PixArea = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const CustomText = styled(Text)`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 18px;
  gap: 8px;

  @media (max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
    font-size: 16px;
  }
`;

const CopyIcon = styled(Copy)`
  width: 18px;
`;

export { PixArea, CustomText, CopyIcon };
