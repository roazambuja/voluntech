import styled from "styled-components";

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  gap: 4px;
  width: 100%;
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.GREY};
  font-size: 14px;
  font-weight: 500;
`;

export { InputArea, Label };
