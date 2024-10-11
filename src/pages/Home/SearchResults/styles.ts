import styled from "styled-components";
import { ConfigSection } from "../../Organizations/Configurations/styles";
import { Title as GlobalTitle } from "../../../styles/global";

const ListItem = styled(ConfigSection)`
  justify-content: left;
  gap: 16px;
  padding: 12px 16px;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.LIGHT};
  }
`;

const Header = styled.div`
  box-sizing: border-box;
  padding: 8px;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.colors.WHITE};
  background-color: ${(props) => props.theme.colors.PRIMARY_LIGHT};
`;

const Title = styled(GlobalTitle)`
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Icon = styled.svg`
  width: 30px;
  height: 30px;
  color: ${(props) => props.theme.colors.LIGHT_GREY};
`;

const Strong = styled.strong`
  color: ${(props) => props.theme.colors.GREY};
  font-weight: 500;
  text-decoration: none;
`;

export { ListItem, Header, Title, Icon, Strong };
