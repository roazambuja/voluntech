import styled from "styled-components";
import { ListItem } from "../SearchResults/styles";
import { CustomPaper } from "../../Organizations/Configurations/styles";
import { Header } from "../../VolunteeringDetails/styles";
import { Text } from "../../../styles/global";

const Paper = styled(CustomPaper)`
  margin: 1rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 4px 10px 0 rgba(0, 0, 0, 0.09);
`;

const VolunteeringHeader = styled(Header)`
  height: 40px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const UpdateHeader = styled(ListItem)`
  padding: 16px 16px 8px 16px;

  &:hover {
    background-color: ${(props) => props.theme.colors.WHITE};
  }
`;

const DescriptionArea = styled.div`
  width: 100%;
  padding: 8px 16px 16px 16px;
  box-sizing: border-box;
`;

const PostText = styled(Text)`
  color: ${(props) => props.theme.colors.BLACK};
  font-size: 16px;
`;

export { Paper, VolunteeringHeader, UpdateHeader, DescriptionArea, PostText };
