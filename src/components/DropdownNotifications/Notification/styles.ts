import styled from "styled-components";
import { UpdateHeader } from "../../../pages/Home/FeedCard/styles";

const NotificationItem = styled(UpdateHeader)`
  justify-content: space-between;
  padding: 8px 16px;
`;

const Informations = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  gap: 24px;

  svg {
    cursor: pointer;
    color: ${(props) => props.theme.colors.BLACK};
  }
`;

export { Buttons, Informations, NotificationItem };