import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    gap: 24px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
    gap: 16px;
  }
`;

const SocialMediaLogo = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.PRIMARY_LIGHT};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    width: 35px;
    height: 35px;
  }

  svg {
    width: 25px;
    height: 25px;
    color: ${(props) => props.theme.colors.WHITE};
  }
`;

export { Container, SocialMediaLogo };
