import styled from "styled-components";

const Field = styled.input<React.InputHTMLAttributes<HTMLInputElement>>`
  border: 1px solid ${(props) => props.theme.colors.GREY};
  border-radius: 4px;
  display: ${(props) => props.type === "file" && "none"};
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
