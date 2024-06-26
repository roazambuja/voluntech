import styled from "styled-components";

const Field = styled.input`
  border: 1px solid ${(props) => props.theme.colors.GREY};
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  height: calc(40px - 16px);
  padding: 8px;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.PRIMARY_DARK};
    outline: none;
  }
`;

export { Field };
