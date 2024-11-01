import styled from "styled-components";

const ListContainer = styled.div<{ hide: boolean }>`
  width: 35%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    display: ${(props) => (props.hide ? "none" : "flex")};
    width: 100%;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 60px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px;
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

export { ListContainer, List };
