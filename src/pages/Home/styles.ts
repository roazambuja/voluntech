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

const ChangePage = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

const ChangePageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.BLACK};
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.colors.SECONDARY};
  }

  &:disabled {
    color: ${(props) => props.theme.colors.LIGHT_GREY};
    cursor: auto;

    svg {
      color: ${(props) => props.theme.colors.LIGHT_GREY};
    }
  }
`;
export { Search, SearchInput, ChangePage, ChangePageButton };
