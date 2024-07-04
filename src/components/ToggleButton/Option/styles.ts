import styled from "styled-components";
import { OptionProps } from ".";

const Option = styled.div<OptionProps>`
  background-color: ${(props) =>
    props.selected ? props.theme.colors.PRIMARY : props.theme.colors.WHITE};
  color: ${(props) =>
    props.selected ? props.theme.colors.WHITE : props.theme.colors.PRIMARY};
  font-size: 14px;
  padding: 6px 10px;

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    font-size: 12px;
  }
`;

export { Option };
