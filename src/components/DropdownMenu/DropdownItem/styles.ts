import styled from "styled-components";

const Item = styled.li`
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.LIGHT};
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.LIGHT};
  }
`;

const Icon = styled.svg`
  color: ${(props) => props.theme.colors.GREY};
  width: 20px;
  height: 20px;
`;

const Link = styled.a`
  color: ${(props) => props.theme.colors.GREY};
  font-size: 18px;

  @media (max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
    font-size: 16px;
  }
`;

export { Item, Icon, Link };
