import styled from "styled-components";
import { Upload } from "react-feather";

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  gap: 4px;
  width: 100%;
`;

const UploadIcon = styled(Upload)`
  width: 16px;
  height: 16px;
  stroke-width: 3px;
`;

export { InputArea, UploadIcon };
