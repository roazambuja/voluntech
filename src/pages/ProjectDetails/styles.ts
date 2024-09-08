import styled from "styled-components";
import { Paper } from "../../styles/global";

const CustomPaper = styled(Paper)`
  padding: 0;
  gap: 0;
`;

const HeaderImage = styled.img`
  height: 150px;
  width: 100%;
  object-fit: cover;
  border-bottom: 2px solid ${(props) => props.theme.colors.PRIMARY_LIGHT};
`;

const DefaultHeader = styled.div`
  height: 150px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.PRIMARY_LIGHT};
`;

const InformationsArea = styled.div`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
`;

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export { CustomPaper, HeaderImage, DefaultHeader, InformationsArea, TitleArea };
