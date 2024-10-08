import styled from "styled-components";

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

export { ChangePage, ChangePageButton };
