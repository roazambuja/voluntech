import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
`;

const Line = styled.div`
  background-color: ${(props) => props.theme.colors.GREY};
  height: 1px;
  width: 100%;
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.GREY};
  font-size: 12px;
  font-family: "Roboto", sans-serif;
`;

export { Container, Line, Text };
