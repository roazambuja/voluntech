import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
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
  margin: 0 8px 0 8px;
`;

export { Container, Line, Text };
