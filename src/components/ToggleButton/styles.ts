import styled from "styled-components";

const ButtonArea = styled.div`
  border: 2px solid ${(props) => props.theme.colors.PRIMARY};
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  overflow: auto;
  text-align: center;
  width: fit-content;
`;

export { ButtonArea };
