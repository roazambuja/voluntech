import styled from "styled-components";

const RadioArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.span`
  color: ${(props) => props.theme.colors.GREY};
  font-size: 14px;
  font-weight: 500;
`;

const OptionsArea = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const InputArea = styled.div`
  width: 100%;
`;

const Radio = styled.input``;

const Label = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  margin-left: 4px;
  color: ${(props) => props.theme.colors.BLACK};
`;

export { RadioArea, Title, OptionsArea, InputArea, Radio, Label };
