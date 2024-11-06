import styled from "styled-components";

const Screen = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.LIGHT};
  display: flex;
  font-family: "Roboto", sans-serif;
  justify-content: center;
  min-height: 100vh;
`;

const PrivateScreen = styled(Screen)`
  justify-content: flex-start;
  flex-direction: column;
  min-height: calc(100vh - 54px);
`;

export { Screen, PrivateScreen };
