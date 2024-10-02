import styled from "styled-components";

const Search = styled.form`
  background-color: ${(props) => props.theme.colors.WHITE};
  border: none;
  border-radius: 16px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  overflow: auto;
  gap: 8px;
  padding: 16px;
  margin: 32px 0;
  align-items: center;
  color: ${(props) => props.theme.colors.GREY};
  width: 500px;

  svg {
    width: 25px;
    height: 25px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    width: 70%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
    width: 85%;
  }
`;

const SearchInput = styled.input`
  border: none;
  font-size: 16px;
  outline: none;
  width: 100%;
`;

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    width: 70%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
    width: 85%;
  }
`;

const FilterButton = styled.button<{ selected: boolean }>`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.GREY};
  font-weight: 500;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  padding: 4px 8px;
  cursor: pointer;

  &:hover {
    color: ${(props) => !props.selected && props.theme.colors.BLACK};
    background-color: ${(props) => props.selected && props.theme.colors.PRIMARY_DARK};
  }

  ${(props) =>
    props.selected &&
    `
    background-color: ${props.theme.colors.PRIMARY_LIGHT};
    color: white;
    border-radius: 16px;
  `}
`;

export { Search, SearchInput, Filters, FilterButton };
