import styled from "styled-components";
import { Paper } from "../../../../styles/global";
import { ChevronRight } from "react-feather";

const CustomPaper = styled(Paper)`
  width: 100%;
  height: 70px;
  margin: 0;
  box-shadow: none;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.colors.PRIMARY_LIGHT};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.LIGHT};
    border: 2px solid ${(props) => props.theme.colors.PRIMARY_LIGHT};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    height: 60px;
  }
`;

const ProjectTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: ${(props) => props.theme.colors.BLACK};
  height: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    font-size: 16px;
  }
`;

const ChevronIcon = styled(ChevronRight)`
  width: 25px;
  height: 25px;
  color: ${(props) => props.theme.colors.SECONDARY};
`;

export { CustomPaper, ProjectTitle, ChevronIcon };
