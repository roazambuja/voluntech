import styled from "styled-components";
import { Screen as GlobalScreen, Text as GlobalText } from "../../styles/global";

const Screen = styled(GlobalScreen)`
  justify-content: flex-start;
  flex-direction: column;
`;

const FeedHeader = styled.div`
  display: flex;
  width: 480px;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
`;

const Text = styled(GlobalText)`
  font-weight: bold;
  white-space: nowrap;
`;

export { Screen, FeedHeader, Text };
