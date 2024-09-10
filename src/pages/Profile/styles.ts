import styled from "styled-components";
import { Text as GlobalText } from "../../styles/global";

const ProjectArea = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 480px;

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    width: 68%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
    width: 85%;
  }
`;

const FeedHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
`;

const Text = styled(GlobalText)`
  font-weight: bold;
  white-space: nowrap;
`;

export { ProjectArea, FeedHeader, Text };
