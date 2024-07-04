import styled from "styled-components";

const Paper = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.WHITE};
  border-radius: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  padding: 32px;
  margin: 32px 0;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.BLACK};
  font-size: 32px;
  font-weight: 700;
  margin: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    font-size: 28px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.MOBILE}) {
    font-size: 26px;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 16px;
  color: ${(props) => props.theme.colors.GREY};

  @media (max-width: ${(props) => props.theme.breakpoints.TABLET}) {
    font-size: 14px;
  }
`;

const Strong = styled.strong`
  color: ${(props) => props.theme.colors.PRIMARY};
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.GREY};
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export { Paper, Title, Text, Strong, Label };
