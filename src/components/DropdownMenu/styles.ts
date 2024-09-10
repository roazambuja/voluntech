import styled from "styled-components";
import { Paper } from "../../styles/global";

const DropdownMenu = styled(Paper)<{ open: boolean }>`
  position: absolute;
  top: 10px;
  right: 100px;
  width: fit-content;
  padding: 0;
  margin-top: 30px;
  overflow: visible;

  ${(props) =>
    props.open
      ? {
          opacity: 1,
          visibility: "visible",
          transition: "500ms ease",
        }
      : {
          opacity: 0,
          visibility: "hidden",
          transition: "500ms ease",
        }}

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    right: 50px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
    right: 28px;
  }
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  :last-child {
    border-bottom: none;
    border-radius: 0 0 16px 16px;
  }

  :first-child {
    border-radius: 16px 16px 0 0;
  }
`;
export { DropdownMenu, ItemList };
