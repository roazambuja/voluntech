import styled from "styled-components";

const UploadedImages = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    height: 3px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 24px;
    background: ${(props) => props.theme.colors.PRIMARY_LIGHT};
  }

  &::-webkit-scrollbar-track {
    border-radius: 24px;
    background-color: ${(props) => props.theme.colors.LIGHT};
  }
`;
export { UploadedImages };
