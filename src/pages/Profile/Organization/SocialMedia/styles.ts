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

const SocialMediaLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 25px;

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    width: 35px;
    height: 35px;
  }
`;

export { Container, SocialMediaLogo };
