import styled from "styled-components";
import { DropdownMenu } from "../DropdownMenu/styles";

const Dropdown = styled(DropdownMenu)`
  width: 500px;
  right: 170px;
  max-height: 50%;
  overflow: hidden;
  border-radius: 16px;
  box-sizing: border-box;
  flex-direction: column;
  padding-right: 4px;

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    right: 115px;
    width: 70%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
    right: 12px;
    width: 85%;
  }
`;

const NotificationsList = styled.div<{ empty: boolean }>`
  > div:last-child {
    border-bottom: none;
    border-radius: 0 0 16px 16px;
  }

  > div:first-child {
    padding-top: 12px;
    border-radius: 16px 16px 0 0;
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 24px;
    background: ${(props) => props.theme.colors.PRIMARY_LIGHT};
  }

  &::-webkit-scrollbar-track {
    border-radius: 24px;
    background-color: ${(props) => props.theme.colors.LIGHT};
  }

  width: 100%;
  flex: 1;
  max-height: 400px;
  overflow-y: auto;
  box-sizing: border-box;

  padding: ${(props) => props.empty && "24px"};
`;

export { Dropdown, NotificationsList };
